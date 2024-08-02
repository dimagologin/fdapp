import { annualSubscription, PaymentPeriodType, usePaymentPeriod } from "../paymentPeriod";
import { guessCurrency } from "./localeToCurrency";
import { ProxyKind, useProxyKind } from "./proxyKind";
import { findFloorTraficTier, useTrafic } from "./trafic";


const calculateTotals = (traficGb: number, paymentPeriod: PaymentPeriodType, proxyKind: ProxyKind) => {
  const tier = findFloorTraficTier(traficGb);
  const tierDiscountPct = tier.discountPct;
  const traficDiscountMultiplier = discountPctToMultiplier(tier.discountPct);
  const paymentPeriodDiscountPct = paymentPeriod === annualSubscription ? 50 : 0;
  const paymentPeriodDiscountMultiplier = discountPctToMultiplier(paymentPeriodDiscountPct);

  const subtotalPrice = traficGb * proxyKind.price * paymentPeriod.billingPeriods;
  const totalPrice = subtotalPrice * traficDiscountMultiplier * paymentPeriodDiscountMultiplier;

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
  const traficGb = useTrafic();
  const proxyKind = useProxyKind();
  return calculateTotals(traficGb, paymentPeriod, proxyKind);
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