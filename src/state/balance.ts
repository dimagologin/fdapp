import { charm, useCharm } from '@kaigorod/charm';

const balanceCharm = charm<number>(0);
export const setBalance = (value: number) => balanceCharm.set(value);
export const getBalance = () => balanceCharm.get();
export const useIsBalancePositive = () => balanceCharm.get() > 0;
export const useBalance = () => useCharm(balanceCharm);
