import { guessCurrency } from "./localeToCurrency";
import { annualSubscription, PaymentPeriodType, usePaymentPeriod } from "./paymentPeriod";
import { ProxyKind, useProxyKind } from "./proxyKind";
import { findFloorTraficTier, useTrafic } from "./traffic";


const calculateTotals = (trafficGb: number, paymentPeriod: PaymentPeriodType, proxyKind: ProxyKind) => {
  const tier = findFloorTraficTier(trafficGb);
  const tierDiscountPct = tier.discountPct;
  const trafficDiscountMultiplier = discountPctToMultiplier(tier.discountPct);
  const paymentPeriodDiscountPct = paymentPeriod === annualSubscription ? 50 : 0;
  const paymentPeriodDiscountMultiplier = discountPctToMultiplier(paymentPeriodDiscountPct);

  const subtotalPrice = trafficGb * proxyKind.price * paymentPeriod.billingPeriods;
  const totalPrice = subtotalPrice * trafficDiscountMultiplier * paymentPeriodDiscountMultiplier;

  return {
    subtotalPrice,
    subtotalPriceText: formatCurrency(subtotalPrice),

    paymentPeriodDiscountPct,
    tierDiscountPct,

    totalPrice,
    totalPriceText: formatCurrency(totalPrice),
  }
}

export const discountPctToMultiplier = (discountPct: number) => {
  return (100 - discountPct) / 100;
}

export function useTotals() {
  const paymentPeriod = usePaymentPeriod();
  const trafficGb = useTrafic();
  const proxyKind = useProxyKind();
  return calculateTotals(trafficGb, paymentPeriod, proxyKind);
}

export function formatCurrency(usd: number) {
  return "$" + Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(usd);
}

export function formatCurrency2(usd: number) {
  return Intl.NumberFormat(navigator.language, {
    style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    currency: guessCurrency(),
  }).format(usd);
}