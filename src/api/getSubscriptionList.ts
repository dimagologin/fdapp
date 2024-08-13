import { parseDateFromBackend } from '../model/parseDateFromBackend';
import { ProxyKind, ProxyKindName, ProxyKindsByName } from '../model/proxyKind';
import { httpApi } from './api';

export type HttpSubscriptionType = {
  "ID": number,
  "proxy_type": ProxyKindName,
  "tier_id": number,
  "started_at": string,
  "paid_until": string,
  "is_renewable": boolean,
  "amount_monthly": number,
  "traffic_monthly": number
}
export type SubscriptionType = {
  id: number,
  proxyKind: ProxyKind,
  tierId: number,
  startedAtDateTime: Date,
  paidUntilDate: Date,
  isRenewable: boolean,
  trafficGb: number,
  subscriptionCostUsd: number,
}

export const getSubscriptionList = async (): Promise<SubscriptionType[]> => {
  const resp: Array<HttpSubscriptionType> = await httpApi('subscriptions/list', undefined, 'GET')
  const result = resp.map(raw => ({
    id: raw.ID,
    proxyKind: ProxyKindsByName[raw.proxy_type],
    tierId: raw.tier_id,
    paidUntilDate: parseDateFromBackend(raw.paid_until),
    startedAtDateTime: parseDateFromBackend(raw.started_at),
    isRenewable: raw.is_renewable,
    trafficGb: raw.traffic_monthly,
    subscriptionCostUsd: raw.amount_monthly
  }));
  return result;
};

/*
http://139.162.187.132:10082/v1/subscriptions/list
GET, возвращает все подписки пользователя
пример ответа:
[
    {
        "ID": 7,
        "proxy_type": "residential",
        "tier_id": 2,
        "started_at": "2024-08-08T17:08:00.913948Z",
        "paid_until": "2024-12-01T00:00:00Z",
        "is_renewable": true,
        "amount_monthly": 132.75,
        "traffic_monthly": 53687091200
    },
    {
        "ID": 8,
        "proxy_type": "residential",
        "tier_id": 2,
        "started_at": "2024-08-08T17:55:48.221504Z",
        "paid_until": "2024-12-01T00:00:00Z",
        "is_renewable": true,
        "amount_monthly": 132.75,
        "traffic_monthly": 53687091200
    }
] 
Трафик возвращается в байтах, надо переделать в гигабайты для отображения

*/