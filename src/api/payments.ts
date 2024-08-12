const CRYPTOMUS_BASE_URL = 'https://api.cryptomus.com/v1/';
import md5 from 'crypto-js/md5';
import { ProxyKind } from '../model/proxyKind';


export async function cryptomusHttp(uri: string, params: any) {
  const body = JSON.stringify(params);
  const sign: any = md5(btoa(body))
  const merchant = '8b03432e-385b-4670-8d06-064591096795';

  const headers: HeadersInit = {
    sign,
    merchant,
    'Content-Type': 'application/json'
  }
  const resp = await fetch(`${CRYPTOMUS_BASE_URL}${uri}`, {
    method: "POST",
    headers,
    body,
  });
  return resp;
}

type CreateRecurringPaymentParams = {
  amount: string,
  currency: string,
  name: string,
  period: 'weekly' | 'monthly' | 'three_month',
  url_callback: string

}
export async function createRecurringPayment(params: CreateRecurringPaymentParams) {
  return await cryptomusHttp('recurrence/create', params)
}

export async function createSubscription(amount: number, proxyKind: ProxyKind) {
  return await cryptomusHttp('recurrence/create', {
    amount: '' + amount,
    name: proxyKind.title + ' traffic',
    period: 'monthly',
    currency: 'USD',
    to_currency: 'USDT'
  })
}