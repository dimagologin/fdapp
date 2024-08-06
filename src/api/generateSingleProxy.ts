export const generateSingleProxy = async ({
  countryCode = 'DE',
  proxyKind = 'mobile',
}: {
  countryCode?: string;
  proxyKind?: string;
}) => {
  const username = getUsername();

  const URL = 'https://geo.floppydata.com@username:token/mobile/';

  const sample = {
    countryCode: countryCode,
    // "city": "string",
    isMobile: proxyKind === 'mobile',
    isDC: proxyKind === 'dataCenter',
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
