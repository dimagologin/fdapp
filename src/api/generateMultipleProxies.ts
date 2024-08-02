import { dataCenter, getProxyKind, mobile, ProxyKind, ProxyType } from "../state/proxyKind";
import { setProxyList } from "../state/proxyList";
import { httpApi } from "./api";

export async function generateMultipleProxies() {
  const result = await httpGenerateMultipleProxies2(getProxyKind(), "US", 10)
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
        "tag_name": proxyKind.httpTagName
      }
    ]
  }, { auth: true }) as PROXY_GENERATE_BATCH_ResponseType;
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
