import { charm, useCharm } from '@kaigorod/charm';

type ProxyListItem = {
  url: string;
  username: string;
  password: string;
};
const proxyListCharm = charm<ProxyListItem[]>([]);

export const useProxyList = () => useCharm(proxyListCharm);
export const getProxyList = () => proxyListCharm.get();
export const setProxyList = (proxyList: ProxyListItem[]) =>
  proxyListCharm.set(proxyList);
