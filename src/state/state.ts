import { Charm, charm, useCharm } from '@kaigorod/charm';

const userCharm = charm<undefined | { email: string }>(undefined);

const exportLikeCharm = <T>(aCharm: Charm<T>) => {
  return {
    use: () => useCharm(aCharm),
    set: aCharm.set,
    get: aCharm.get,
  };
};

export const authUser = (email: string) => userCharm.set({ email });
export const clearUser = () => userCharm.set(undefined);
export const useUser = () => useCharm(userCharm);
export const getUser = () => userCharm.get();


const balanceCharm = charm<number>(0);
export const setBalance = (value: number) => balanceCharm.set(value);
export const getBalance = () => balanceCharm.get();
export const useIsBalancePositive = () => balanceCharm.get() > 0;
export const useBalance = () => useCharm(balanceCharm);

const isSubscriptionCharm = charm<boolean>(false);
export const useIsSubscription = () => useCharm(isSubscriptionCharm);
export const setIsSubscription = (value: boolean) =>
  isSubscriptionCharm.set(value);


type Country = {
  countryCode: string;
  countryName: string;
  proxiesCount: number;
};

const availableCountriesCharm = charm<Country[]>([])
export const setAvailableCountries = (value: Country[]) => availableCountriesCharm.set(value);
export const useAvailableCountries = () => useCharm(availableCountriesCharm);
