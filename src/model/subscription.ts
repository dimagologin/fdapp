import { charm, useCharm } from '@kaigorod/charm';

export type AccountSubscription = {
  isRenewable: boolean,
  monthlyMoney: number,
}



const subscriptionCharm = charm<number>(0);
export const setBalance = (value: number) => subscriptionCharm.set(value);
export const getBalance = () => subscriptionCharm.get();
export const useIsBalancePositive = () => subscriptionCharm.get() > 0;
export const useBalance = () => useCharm(subscriptionCharm);
