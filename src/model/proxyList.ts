import { charm, useCharm } from '@kaigorod/charm';
import { ProxyType } from './proxyKind';

const proxyListCharm = charm<ProxyType[]>([]);

export const useProxyList = () => useCharm(proxyListCharm);
export const getProxyList = () => proxyListCharm.get();
export const setProxyList = (proxyList: ProxyType[]) =>
  proxyListCharm.set(proxyList);
