import { charm, useCharm } from "@kaigorod/charm";


export const annualSubscription = {
  short: "annual",
  title: 'Annual subscription',
  billingPeriods: 12,
  discountMultiplier: 0.5
} as const;

export const monthlySubscription = {
  short: "monthly",
  title: 'Monthly subscription',
  billingPeriods: 1,
  discountMultiplier: 1
} as const;

export const oneTimePayment = {
  short: 'one-time',
  title: 'One-time payment',
  billingPeriods: 1,
  discountMultiplier: 1
} as const;

export const PaymentPeriodList = {
  annual: annualSubscription,
  monthly: monthlySubscription,
  oneTime: oneTimePayment,
} as const;

export type PaymentPeriodType =
  (typeof PaymentPeriodList)[keyof typeof PaymentPeriodList];

const calculatorProxyKindCharm = charm<PaymentPeriodType>(annualSubscription);
export const setPaymentPeriod = (value: PaymentPeriodType) => calculatorProxyKindCharm.set(value);
export const usePaymentPeriod = () => useCharm(calculatorProxyKindCharm);

