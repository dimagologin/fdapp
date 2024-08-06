import { getUserFromLocalStorage } from '../auth/auth';
import { ProxyKind } from '../model/proxyKind';
import { httpApi } from './api';

export const loadPaidTraficUsageInfo = async (proxyKind: ProxyKind) => {
  return await httpApi('tags/paid_traffic', {
    tag_name: getUserFromLocalStorage().email + proxyKind.postfix,
  });
};
