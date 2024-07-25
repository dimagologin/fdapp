import { Charm, charm, useCharm } from "@kaigorod/charm";

const userCharm = charm<undefined | { email: string }>(undefined);

const exportLikeCharm = <T>(aCharm: Charm<T>) => {
  return {
    use: () => useCharm(aCharm),
    set: aCharm.set,
    get: aCharm.get,
  }
}

export const login = () => userCharm.set({ email: "dima.kaigorodov@gmail.com" })
export const logout = () => userCharm.set(undefined)
export const useUser = () => useCharm(userCharm)
export const getUser = () => userCharm.get();

const isStartedCheckoutCharm = charm(false);
export const startCheckout = () => isStartedCheckoutCharm.set(true)
export const cancelCheckout = () => isStartedCheckoutCharm.set(false)
export const useIsStartedCheckout = () => useCharm(isStartedCheckoutCharm)
export const isStartedCheckout = () => isStartedCheckoutCharm.get();

export const priceByProxyType = {
  mobile: 7,
  residential: 7,
  dataCenter: 1,
} as const;

const proxyTypeCharm = charm<'mobile' | 'residential' | 'dataCenter'>('mobile');
export const {
  set: setProxyType,
  get: getProxyType,
  use: useProxyType
} = exportLikeCharm(proxyTypeCharm);


const traficCharm = charm<number>(1);
export const {
  set: setTrafic,
  get: getTrafic,
  use: useTrafic
} = exportLikeCharm(traficCharm);


const balanceCharm = charm<number>(0);
export const {
  set: setBalance,
  get: getBalance,
  use: useBalance
} = exportLikeCharm(balanceCharm);
