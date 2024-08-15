import { httpApi } from './api';

export const loadPool = async (poolId: number) => {
  const result = await httpApi(`pools/pool/${poolId}`, undefined, "GET");
  console.log('loadPool', result)
  return result
};
