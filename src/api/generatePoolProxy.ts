import { PoolType } from "../model/PoolType";
import { ProxyType } from "../model/proxyKind";
import { httpApi } from "./api";

export const generatePoolProxies = async (pool: PoolType, num: number): Promise<ProxyType[]> => {
  const result = await httpApi('pools/generate-proxies', {
    pool_id: pool.id,
    pool_name: pool.name,
    number: num
  });
  return result.proxies
}

/*

http://139.162.187.132:10082/v1/pools/generate-proxies
Post, пример запроса:
{
    "pool_name": "basic_pool",
    "number": 5
}

пример ответа:
{
    "success": true,
    "isWifi": true,
    "proxies": [
        {
            "username": "Lks06EMoQVU5wCpI",
            "password": "c58UyPjy2tVvwnix",
            "port": 10080,
            "countryCode": "FR",
            "host": "geo.floppydata.com"
        },
        <...>
    ]
}
    
*/