import { charm, useCharm } from '@kaigorod/charm';
import { Country } from './availableCountries';

const DEFAULT_PROXY_COUNTRY: Country = {
  countryCode: 'US',
  countryName: 'United States',
  proxiesCount: 38201,
};
const proxyCountryCharm = charm<Country>(DEFAULT_PROXY_COUNTRY);

export const useProxyCountry = (): Country => useCharm(proxyCountryCharm);
export const getProxyCountry = () => proxyCountryCharm.get();
export const setProxyCountry = (country: Country) =>
  proxyCountryCharm.set(country);
