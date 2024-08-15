import { httpApi } from "./api";
import { SubscriptionType } from "./loadSubscriptionList";

export const loadTrafficForSubscription = async (subscriptionId: number): Promise<TrafficType> => {
  const uri = `/subscriptions/traffic/${subscriptionId}`;
  const result = await httpApi(uri, undefined, 'GET');
  console.log('loadTrafficForSubscription', result);
  return result;
}

export type TrafficType =
  {
    "ID": number,
    "Name": string,
    "bytes_allowed": number,
    "bytes_used": number
  }


export const loadTraffic = async (subscriptions: SubscriptionType[]) => {
  const result = new Map<number, TrafficType>();
  await Promise.all(subscriptions.map(async subscription => {
    const traffic = await loadTrafficForSubscription(subscription.id)
    result.set(subscription.id, traffic);
  }))
  console.log('loadTraffic', { subscriptions, result })
  return result
}
