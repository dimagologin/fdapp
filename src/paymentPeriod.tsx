import { charm, useCharm } from "@kaigorod/charm";

export const annualSubscription = {
  short: "annual",
  title: 'Annual subscription',
  discountMultiplier: 0.5
} as const;

export const monthlySubscription = {
  short: "monthly",
  title: 'Monthly subscription',
  discountMultiplier: 1
} as const;

export const oneTimePayment = {
  short: 'one-time',
  title: 'One-time payment',
  discountMultiplier: 1
} as const;

export const PaymentPeriodList = {
  annual: annualSubscription,
  monthly: monthlySubscription,
  oneTime: oneTimePayment,
} as const;

export type PaymentPeriodType =
  (typeof PaymentPeriodList)[keyof typeof PaymentPeriodList];

const calculatorProxyTypeCharm = charm<PaymentPeriodType>(annualSubscription);
export const setPaymentPeriod = (value: PaymentPeriodType) => calculatorProxyTypeCharm.set(value);
export const usePaymentPeriod = () => useCharm(calculatorProxyTypeCharm);

