import { charm, useCharm } from '@kaigorod/charm';

export type Country = {
  countryCode: string;
  countryName: string;
  proxiesCount: number;
};

const availableCountriesCharm = charm<Country[]>([]);
export const setAvailableCountries = (value: Country[]) =>
  availableCountriesCharm.set(value);
export const useAvailableCountries = () => useCharm(availableCountriesCharm);
