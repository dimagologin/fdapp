
import { httpApi } from './api';


export const loadPoolProxies = async (poolId: number) => {
  const result = await httpApi(`pools/proxies/${poolId}`, undefined, "GET");
  console.log('loadPoolProxies', result)
  return result.proxies
};
