import requests


class ApiDemo:
    def __init__(self):
        self.auth_token = ""
        self.base_url = "http://139.162.187.132:10082"

    def signup(self, username, password):
        path = self.base_url + "/v1/user/signup"
        data = {"username": username, "password": password, "password_confirmation": password}
        resp = requests.post(path, json=data, headers={"Content-Type": "application/json"})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad Signup")

        self.auth_token = "Bearer " + resp.json()['token']

    def login(self, username, password):
        path = self.base_url + "/v1/user/signin"
        data = {"username": username, "password": password}
        resp = requests.post(path, json=data, headers={"Content-Type": "application/json"})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad Signin")

        self.auth_token = "Bearer " + resp.json()['token']

    def add_balance(self, amount):
        path = self.base_url + "/v1/user/add_balance"
        data = {"amount": amount}
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad Add Balance")

    def get_balance(self):
        path = self.base_url + "/v1/user/get_balance"
        resp = requests.get(path, headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad Get Balance")
        return resp.json()["balance"]

    def create_tag(self, tag_name):
        path = self.base_url + "/v1/tags/create"
        data = {
            "tag_name": tag_name,
            "repeat_interval": "monthly",
            "tag_values": [
                {
                    "tag_key": "TRAFFIC_ALLOWED",  # этот трафик будет обновляться ежемесячно
                    "tag_value": 10485760  # в байтах, здесь 10*1024*1024 = 10 MiB
                },
                {
                    "tag_key": "PAID_TRAFFIC_ALLOWED",  # этот трафик не обновляется
                    "tag_value": 0
                }
            ]
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad create tag")
        print("Tag ID: " + resp.json()["id"])

    def add_tag_value(self, tag_name, tag_value_key,
                      tag_value_value):  # если такого значения нет, создает, иначе увеличивает
        path = self.base_url + "/v1/tags/add_value"
        data = {
            "tag_name": tag_name,
            "tag_values": [
                {
                    "tag_key": tag_value_key,
                    "tag_value": tag_value_value
                }
            ]
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 204:
            print(resp.status_code, resp.text)
            raise Exception("Bad Add Tag Value")

    def update_tag_value(self, tag_name, tag_value_key,
                         tag_value_value):  # если такого значения нет, ошибка, иначе устанавливает
        path = self.base_url + "/v1/tags/update_value"
        data = {
            "tag_name": tag_name,
            "tag_values": [
                {
                    "tag_key": tag_value_key,
                    "tag_value": tag_value_value
                }
            ]
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 204:
            print(resp.status_code, resp.text)
            raise Exception("Bad Add Tag Value")

    def get_traffic(self, tag_name):
        path = self.base_url + "/v1/tags/traffic"
        data = {
            "tag_name": tag_name
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad tag_traffic")
        return resp.json()["bytes_allowed"], resp.json()["bytes_used"]

    def list_proxies(self, tag_name):
        path = self.base_url + "/v1/tags/list_proxies"
        data = {
            "tag_name": tag_name
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad tag_traffic")
        return resp.json()

    def get_paid_traffic(self, tag_name):
        path = self.base_url + "/v1/tags/paid_traffic"
        data = {
            "tag_name": tag_name
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.text)
            raise Exception("Bad tag_traffic")
        return resp.json()["bytes_allowed"], resp.json()["bytes_used"]

    def generate_proxy(self, country, is_datacenter, is_mobile, provider, tag_name):
        path = self.base_url + "/v1/proxy/generate"
        data = {
            "countryCode": country,
            "isDC": is_datacenter,
            # резидентские, соответственно, если isDC и isMobile оба false, оба true быть не могут
            "isMobile": is_mobile,
            "provider": provider,  # smartproxy, dataimpulse или floppydata на данный момент
            "tags": [
                {
                    "tag_name": tag_name,
                }
            ]
        }
        resp = requests.post(path, json=data,
                             headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.status_code, resp.text)
            raise Exception("Bad Generate Proxy")
        return resp.json()

    def list_tags(self):
        path = self.base_url + "/v1/user/tag_list"

        resp = requests.get(path, headers={"Content-Type": "application/json", "Authorization": self.auth_token})
        if resp.status_code != 200:
            print(resp.status_code, resp.text)
            raise Exception("Bad Generate Proxy")
        return resp.json()


if __name__ == "__main__":
    api = ApiDemo()
    # api.signup("api-demo-user", "api-demo-password")
    api.login("api-demo-user", "api-demo-password")
    api.add_balance(1)
    # api.create_tag("demo_tag_r")
    print(api.get_traffic("demo_tag_r"))
    api.add_tag_value("demo_tag_r", "PAID_TRAFFIC_ALLOWED", 10485760)
    print(api.get_traffic("demo_tag_r"))
    print(api.get_paid_traffic("demo_tag_r"))
    print("balance", api.get_balance(), "tokens")
    proxy = api.generate_proxy("US", True, False, "dataimpulse", "demo_tag_r")
    print("proxy: login", proxy["username"], "password:", proxy["password"])
    print("http://", proxy["username"], ":", proxy["password"], "@139.162.187.132:10080", sep='')
    for tag in api.list_tags():
        print(tag)
    print()
    for proxy in api.list_proxies("demo_tag_r"):
        print(proxy)
