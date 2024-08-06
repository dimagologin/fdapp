import { httpApi } from './api';

export const loadCountryList = async (
  { proxyKind = 'mobile' } = { proxyKind: 'mobile' },
) => {
  return await httpApi('proxy/countries_list', {
    isMobile: proxyKind === 'mobile',
    isDc: proxyKind === 'dataCenter',
    provider: 'floppydata',
  });
};
