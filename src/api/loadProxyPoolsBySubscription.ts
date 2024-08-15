import { httpApi } from "./api";

export const loadProxyPoolsBySubscription = async (subscriptionId: number) => {
  const uri = `/subscriptions/pools/${subscriptionId}`;
  const result = await httpApi(uri, undefined, 'GET');
  console.log(result);
  return result;
}
// const loadAllProxyPools = async (subscriptionId: number) => {

//   const uri = `/subscriptions/pools/${subscriptionId}`;
//   return await httpApi(uri, {}, 'GET')
// }