import { ProxyKind } from "../model/proxyKind";
import { findSubscriptionByProxyType } from "../model/subscriptions";
import { createProxyPool } from "./createPool";
import { generatePoolProxies } from "./generatePoolProxy";

export const nicelyCreateNewProxyPoolAndGenerateProxies = async (
  poolName: string,
  proxyKind: ProxyKind,
  countryCodes: string[],
  amount: number,
) => {
  const sub = findSubscriptionByProxyType(proxyKind);
  if (!sub) {
    throw new Error('No subscription found for ' + proxyKind.name)
  }
  const proxyPool = await createProxyPool(sub, poolName, countryCodes);
  const proxies = await generatePoolProxies({
    id: proxyPool.id,
    name: poolName
  }, amount)
  const redirectTo = `/proxy-pool/${proxyPool.id}`
  return redirectTo
}
