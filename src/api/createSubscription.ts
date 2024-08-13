import { formatDateToBackend } from '../model/formatDateToBackend';
import { ProxyKind } from '../model/proxyKind';
import { httpApi } from './api';

export type CreateSubscriptionParams = {
  proxyKind: ProxyKind,
  paidUntilDate: Date,
  isRenewable: boolean,
  trafficGb: number
}

export const createSubscription = async (params: CreateSubscriptionParams) => {
  const {
    proxyKind,
    paidUntilDate,
    isRenewable,
    trafficGb
  } = params;
  return await httpApi('subscriptions/create', {
    "proxy_type": proxyKind,
    "paid_until": formatDateToBackend(paidUntilDate),
    "is_renewable": isRenewable,
    "traffic_monthly": trafficGb
  });
};

/*

http://139.162.187.132:10082/v1/subscriptions/create
Post, пример запроса:
{
    "proxy_type": "residential",
    "paid_until": "2024-12-01 00:00:00",
    "is_renewable": true,
    "traffic_monthly": 50
}
Пример ответа:
{"subscription_id": 8}


*/