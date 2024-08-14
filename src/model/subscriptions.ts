import { charm, useCharm } from '@kaigorod/charm';
import { useEffect } from 'react';
import { loadSubscriptionList, SubscriptionType } from '../api/loadSubscriptionList';
import { ProxyKind } from './proxyKind';

const subscriptionsCharm = charm<SubscriptionType[] | undefined>(undefined);
export const setSubscriptions = (value: SubscriptionType[]) => subscriptionsCharm.set(value);
export const getSubscriptions = () => subscriptionsCharm.get();
export const useSubscriptions = () => {
  useEffect(() => {
    loadSubscriptionList().then(subscriptions => setSubscriptions(subscriptions))
  }, [])
  return useCharm(subscriptionsCharm)
}
export const useHasActiveSubscriptions = () => undefined === useCharm(subscriptionsCharm);
export const useHasActiveSubscriptionsForProxyKind = (proxyKind: ProxyKind) => !!useCharm(subscriptionsCharm)?.find(sub => sub.proxyKind === proxyKind)
export const hasActiveSubscriptions = () => undefined === subscriptionsCharm.get();
export const findSubscriptionByProxyType = (proxyKind: ProxyKind) => {
  return getSubscriptions()?.find(sub => sub.proxyKind === proxyKind)
}
