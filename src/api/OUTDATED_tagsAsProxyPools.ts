import {
  ProxyKind,
  ProxyType
} from '../model/proxyKind';
import { setProxyList } from '../model/proxyList';
import { httpApi } from './api';

export async function generateMultipleProxies(
  proxyKind: ProxyKind,
  countryCode: string,
  amount: number,
) {
  const result = await httpGenerateMultipleProxies(
    proxyKind,
    countryCode,
    amount,
  );
  if (!result.success) {
    throw new Error('Failed to create proxies');
  }
  setProxyList(result.proxies);
}

export type PROXY_GENERATE_BATCH_ResponseType = {
  success: true;
  countryCode: 'US';
  isWifi: true;
  proxies: ProxyType[];
};

// export const createDefaultProxyPool = async (kind: ProxyKind) => {
//   return await createEmptyProxyPool(
//     getUserFromLocalStorage()?.email + kind.postfix,
//   );
// };

// export type RawProxyPool = {
//   id: number;
//   tag_name: string;
//   repeat_interval: 'monthly';
//   valid_from: string;
//   valid_till: string;
// };
// export const listAllProxyPools = async (): Promise<RawProxyPool[]> => {
//   return await httpApi('user/tag_list', {});
// };

// export type TrafficResponseType = {
//   bytes_used: number;
//   bytes_allowed: number;
// };

export const getTrafficByTagName = async (
  tag_name: string,
): Promise<TrafficResponseType> => {
  return await httpApi('tags/traffic', {
    tag_name,
  });
};
export const getTrafficByTagId = async (
  tag_id: number,
): Promise<TrafficResponseType> => {
  return await httpApi('tags/traffic', {
    tag_id,
  });
};

export type ProxyMonthlyUsage = {
  id: number,
  tag_name: string;
  usedGb: number;
  kind: ProxyKind;
};

// export const getUsageByProxyPools = async () => {
//   const pools = await listAllProxyPools();
//   const result = new Array<ProxyMonthlyUsage>();

//   for (const pool of pools) {
//     const item: ProxyMonthlyUsage = {
//       id: pool.id,
//       tag_name: pool.tag_name,
//       kind: getProxyKindByName(pool.tag_name),
//       usedGb: 0,
//     };
//     try {
//       const traffic = await getTrafficByPoolName(pool.tag_name);
//       item.usedGb = traffic.bytes_used;
//     } catch (e) {
//       console.error(e);
//     }
//     result.push(item);
//   }
//   console.log({ pools });
//   return result;
// };


// export async function httpGenerateMultipleProxies(
//   proxyKind: ProxyKind,
//   countryCode: string,
//   quantity: number,
// ): Promise<PROXY_GENERATE_BATCH_ResponseType> {
//   return (await httpApi('proxy/generate_batch', {
//     countryCode: countryCode,
//     isDC: proxyKind === dataCenter,
//     isMobile: proxyKind === mobile,
//     // "provider": "dataimpulse",
//     number: quantity,
//     tags: [
//       {
//         tag_name: getUserFromLocalStorage()?.email + proxyKind.postfix,
//       },
//     ],
//   })) as PROXY_GENERATE_BATCH_ResponseType;
// }
