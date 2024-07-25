import { charm, useCharm } from "@kaigorod/charm";

const userCharm = charm<undefined | { name: string }>(undefined);

const exportLikeCharm = (aCharm) => {
  return {
    use: () => useCharm(aCharm),
    set: aCharm.set,
    get: aCharm.get,
  }
}

export const login = () => userCharm.set({ name: "Dima" })
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

