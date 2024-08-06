import { charm, useCharm } from '@kaigorod/charm';

export type SubscriptionMonth = {
  lastMonthRolloverUsd: number,
  isSubscriptionPaid: boolean,
  mobileTrafficUsageGb: number;
  residentialTrafficUsageGb: number;
  dataCenterTrafficUsageGb: number;
  extraTopUpUsd: number;
  totalUsageUsd: number;
  remainingBalanceUsd: number;
}

const NEGATIVE_BALANCE_LIMIT_GB = 50;

const subscriptionMonthCharm = charm<number>(0);
export const setSubscriptionMonth = (value: number) => subscriptionMonthCharm.set(value);
export const getSubscriptionMonth = () => subscriptionMonthCharm.get();
export const useIsSubscriptionMonthPositive = () => subscriptionMonthCharm.get() > 0;
export const useSubscriptionMonth = () => useCharm(subscriptionMonthCharm);
