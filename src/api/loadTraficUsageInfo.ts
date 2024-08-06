import { getUserFromLocalStorage } from '../auth/auth';
import { ProxyKind } from '../model/proxyKind';
import { httpApi } from './api';

export const loadTraficUsageInfo = async (proxyKind: ProxyKind) => {
  return await httpApi('tags/traffic', {
    tag_name: getUserFromLocalStorage().email + proxyKind.postfix,
  });
};
