import { Charm, charm, useCharm } from "@kaigorod/charm";
import { formatUsd, useProxyType } from "./proxyType";

const userCharm = charm<undefined | { email: string }>(undefined);

const exportLikeCharm = <T>(aCharm: Charm<T>) => {
  return {
    use: () => useCharm(aCharm),
    set: aCharm.set,
    get: aCharm.get,
  }
}

export const authUser = (email: string) => userCharm.set({ email })
export const clearUser = () => userCharm.set(undefined)
export const useUser = () => useCharm(userCharm)
export const getUser = () => userCharm.get();

const isStartedCheckoutCharm = charm(false);
export const startCheckout = () => isStartedCheckoutCharm.set(true)
export const cancelCheckout = () => isStartedCheckoutCharm.set(false)
export const useIsStartedCheckout = () => useCharm(isStartedCheckoutCharm)
export const isStartedCheckout = () => isStartedCheckoutCharm.get();

const traficCharm = charm<number>(12);
export const setTrafic = (value: number) => traficCharm.set(value);
export const getTrafic = () => traficCharm.get();
export const useTrafic = () => useCharm(traficCharm);

export const useFormattedTotal = () => {
  const proxyType = useProxyType()
  const trafic = useTrafic()

  return `\$${formatUsd(proxyType.price * trafic)}`
}

const balanceCharm = charm<number>(0);
export const setBalance = (value: number) => balanceCharm.set(value);
export const getBalance = () => balanceCharm.get();
export const useIsBalancePositive = () => balanceCharm.get() > 0;
export const useBalance = () => useCharm(balanceCharm);
