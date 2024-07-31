import { getUsername } from './auth';

const base = 'https://api.floppydata.com/v1/';

export const httpApi = async (
  uri = '',
  params = {},
  { method = 'POST', auth = true } = { method: 'POST', auth: true },
) => {
  if (!uri) {
    throw new Error('!uri');
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  if (auth) {
    const token = JSON.parse(localStorage.auth).token;
    headers.Authorization = `Bearer ${token}`;
  }

  const resp = await fetch(`${base}${uri}`, {
    method,
    headers,
    body: JSON.stringify(params),
  });
  if (resp.status > 400) {
    try {
      console.error(resp.statusText);
      console.error(resp.text);
    } catch (e) {}
    throw new Error('Request failed: ' + resp.status);
  }
  const result = await resp.json();
  return result;
};

export const getCountries = async (
  { proxyType = 'mobile' } = { proxyType: 'mobile' },
) => {
  return await httpApi('proxy/countries_list', {
    isMobile: proxyType === 'mobile',
    isDc: proxyType === 'dataCenter',
    provider: 'floppydata',
  });
};

export const generateSingleProxy = async ({
  countryCode = 'DE',
  proxyType = 'mobile',
}: {
  countryCode?: string;
  proxyType?: string;
}) => {
  const username = getUsername();

  const URL = 'https://geo.floppydata.com@username:token/mobile/';

  const sample = {
    countryCode: countryCode,
    // "city": "string",
    isMobile: proxyType === 'mobile',
    isDC: proxyType === 'dataCenter',
    // provider: 'dataimpulse',
    // provider: 'floppydata',
    tags: [
      {
        proxy_username: username,
        tag_name: '123',
        repeat_interval: 'monthly',
        // "valid_from": "string",
        // "valid_till": "string",
        // "tag_values": [
        //   {
        //     "tag_key": "string",
        //     "tag_value": "string"
        //   }
        // ]
      },
    ],
  };

  const exampleReply = {
    success: true,
    port: 10080,
    host: 'geo.floppydata.com',
    ip: '79.127.216.53',
    city: 'Frankfurt am Main',
    countryCode: 'DE',
    countryName: 'Germany',
    isWifi: false,
    timezone: 'Europe/Berlin',
    username: 'eMJhFiriJ0srPVfP',
    password: 'zDZDCakZGbBQD1eN',
    change_ip_link:
      'https://api.floppydata.com/v1/proxy/change_ip?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTM3NzIwNDYuMjg4MTMyMiwiaWF0IjoxNzIyMjM2MDQ2LjI4ODEzNDgsInVzZXJuYW1lIjoiZU1KaEZpcmlKMHNyUFZmUCJ9.HIuqmij6CcDyDViGhtmrwBWkYexoIMWukWTAJ0Ht0f8',
  };

  return await httpApi('proxy/generate', sample);
};
