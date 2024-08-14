import { PoolType } from "../model/PoolType";
import { httpApi } from "./api";
import { SubscriptionType } from "./loadSubscriptionList";

export const createProxyPool = async (subscription: SubscriptionType, poolName: string, countriesList: string[])
  : Promise<PoolType> => {
  const result = await httpApi('pools/create', {
    subscription_id: subscription.id,
    pool_name: poolName,
    countries_list: countriesList
  });
  return result
}
/*

http://139.162.187.132:10082/v1/pools/create
POST, пример запроса
{
    "subscription_id": 8,
    "countries_list": ["DE", "GB", "FR"],
    "pool_name": "basic_pool"
}

*/