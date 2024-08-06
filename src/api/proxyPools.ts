import { dataCenter, getProxyKindByName, mobile, ProxyKind, ProxyType } from "../model/proxyKind";
import { setProxyList } from "../model/proxyList";
import { httpApi } from "./api";
import { getUserFromLocalStorage } from "./auth";

export async function generateMultipleProxies(proxyKind: ProxyKind, countryCode: string, amount: number) {
  const result = await httpGenerateMultipleProxies(proxyKind, countryCode, amount)
  if (!result.success) {
    throw new Error("Failed to create proxies")
  }
  setProxyList(result.proxies)
}

export type PROXY_GENERATE_BATCH_ResponseType = {
  "success": true,
  "countryCode": "US",
  "isWifi": true,
  proxies: ProxyType[]
}

export const createDefaultProxyPool = async (kind: ProxyKind) => {
  return await createEmptyProxyPool(getUserFromLocalStorage()?.email + kind.postfix)
}

export type RawProxyPool = {
  "id": number,
  "tag_name": string,
  "repeat_interval": "monthly",
  "valid_from": string,
  "valid_till": string
}
export const listAllProxyPools = async (): Promise<RawProxyPool[]> => {
  return await httpApi('user/tag_list', {});
}

export type TrafficResponseType = {
  bytes_used: number,
  bytes_allowed: number,
}

export const getTraffic = async (tag_name: string): Promise<TrafficResponseType> => {
  return await httpApi('tags/traffic', {
    tag_name
  });
}

export type ProxyMonthlyUsage = {
  tag_name: string;
  usedGb: number;
  kind: ProxyKind
}

export const getUsageByProxyPools = async () => {
  const pools = await listAllProxyPools();
  const result = new Array<ProxyMonthlyUsage>()

  for (const pool of pools) {
    const item: ProxyMonthlyUsage = {
      tag_name: pool.tag_name,
      kind: getProxyKindByName(pool.tag_name),
      usedGb: 0,
    };
    try {
      const traffic = await getTraffic(pool.tag_name);
      item.usedGb = traffic.bytes_used;
    } catch (e) {
      console.error(e);
    }
    result.push(item);
  }
  console.log({ pools })
  return result;
}
 
const createEmptyProxyPool = async (name: string) => {
   
}


export async function httpGenerateMultipleProxies(proxyKind: ProxyKind, countryCode: string, quantity: number):
  Promise<PROXY_GENERATE_BATCH_ResponseType> {
  return await httpApi('proxy/generate_batch', {
    "countryCode": countryCode,
    "isDC": proxyKind === dataCenter,
    "isMobile": proxyKind === mobile,
    // "provider": "dataimpulse",
    "number": quantity,
    "tags": [
      {
        "tag_name": getUserFromLocalStorage()?.email + proxyKind.postfix
      }
    ]
  }) as PROXY_GENERATE_BATCH_ResponseType;
}

export async function httpGenerateMultipleProxies2(proxyKind: ProxyKind, countryCode: string, quantity: number) {
  return generateProxiesResponseSample;
}

const generateProxiesRequestSample = {
  countryCode: 'US',
  isDC: true,
  isMobile: false,
  provider: 'dataimpulse',
  number: 10,
  tags: [
    {
      tag_name: 'demo_tag_r',
    },
  ],
};

const generateProxiesResponseSample = {
  success: true,
  countryCode: 'US',
  isWifi: true,
  proxies: [
    {
      username: 'XLpraELOLNYEAD7W',
      password: 'cl6bBsh1Njm62pTm',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'g92SG7gqCkhxzoA3',
      password: 'Jmm2OQNhDDw3Mzln',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'LVNfGaivq7rVjdNZ',
      password: '7l8i7VGKegpCdsqG',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'BPzyv5SgFWCJDCxG',
      password: 'HHEigLZZAAuPvl19',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'AzDqdH6LjveKQscJ',
      password: 'MlZbyPnzTYxruqMI',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'GHsiDKg1bqkqqVoj',
      password: 'FWgEYzaKoLiKInsi',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'hMgZbcPj53uPgqLO',
      password: 'D7LMpVgtsw7lcw45',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'okcMNrNgVp0MRaEP',
      password: 'zlSgk8V7o3Vb4PMx',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'vVv4AiADhwQb68gN',
      password: 'vZiVacnRiyqMIRGf',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
    {
      username: 'rPoi4q30eo3TsMZL',
      password: 'qgNdyKvHliJLHJPA',
      port: 10080,
      host: 'geo-dc.floppydata.com',
    },
  ],
};
