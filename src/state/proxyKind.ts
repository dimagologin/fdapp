import { charm, useCharm } from '@kaigorod/charm';
import { LucideBuilding, LucideServer, LucideSmartphone } from 'lucide-react';

export const mobile = {
  name: 'mobile',
  price: 2.95,
  priceStr: '$2.95',
  title: 'Mobile',
  description: 'Best anti-detect',
  Icon: LucideSmartphone,
  httpTagName: 'demo_tag_m',
} as const;

export const residential = {
  name: 'residential',
  price: 2.95,
  priceStr: '$2.95',
  title: 'Residential',
  description: 'Best anti-detect',
  Icon: LucideBuilding,
  httpTagName: 'demo_tag_r',
} as const;

export const dataCenter = {
  name: 'dataCenter',
  price: 0.9,
  priceStr: '$0.90',
  title: 'Data center',
  description: 'More affordable',
  Icon: LucideServer,
  httpTagName: 'demo_tag_dc',
} as const;

export const ProxyKindsByName = {
  mobile,
  residential,
  dataCenter,
} as const;

export type ProxyType = {
  username: string,
  password: string,
  port: number,
  host: string,
};

export type ProxyKind =
  (typeof ProxyKindsByName)[keyof typeof ProxyKindsByName];

const calculatorProxyKindCharm = charm<ProxyKind>(mobile);
export const setProxyKind = (value: ProxyKind) =>
  calculatorProxyKindCharm.set(value);
export const getProxyKind = () => calculatorProxyKindCharm.get();
export const useProxyKind = () => useCharm(calculatorProxyKindCharm);

export const createProxyKindPickerApi = () => {
  const proxyKindCharm = charm<ProxyKind>(mobile);
  return {
    setProxyKind: (value: ProxyKind) => proxyKindCharm.set(value),
    useProxyKind: () => useCharm(proxyKindCharm),
  };
};
