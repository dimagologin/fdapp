import { charm, useCharm } from '@kaigorod/charm';
import { LucideBuilding, LucideServer, LucideSmartphone } from 'lucide-react';

export const mobile = {
  name: 'mobile',
  price: 2.95,
  priceStr: '$2.95',
  title: 'Mobile',
  description: 'Best anti-detect',
  Icon: LucideSmartphone,
  postfix: '_m',
} as const;

export const residential = {
  name: 'residential',
  price: 2.95,
  priceStr: '$2.95',
  title: 'Residential',
  description: 'Best anti-detect',
  Icon: LucideBuilding,
  postfix: '_r',
} as const;

export const dataCenter = {
  name: 'dataCenter',
  price: 0.9,
  priceStr: '$0.90',
  title: 'Data center',
  description: 'More affordable',
  Icon: LucideServer,
  postfix: '_dc',
} as const;

export const ProxyKindsByName = {
  mobile,
  residential,
  dataCenter,
} as const;

export type ProxyType = {
  username: string;
  password: string;
  port: number;
  host: string;
};

export type ProxyKindName = keyof typeof ProxyKindsByName;
export type ProxyKind =
  (typeof ProxyKindsByName)[keyof typeof ProxyKindsByName];

export const getProxyKindByName = (tag_name: string) => {
  if (tag_name.endsWith('_m')) {
    return mobile;
  }
  if (tag_name.endsWith('_r')) {
    return mobile;
  }
  if (tag_name.endsWith('_dc')) {
    return mobile;
  }
  return mobile;
};

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
