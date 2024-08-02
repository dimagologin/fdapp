import { annualSubscription, PaymentPeriodType, usePaymentPeriod } from "../paymentPeriod";
import { guessCurrency } from "./localeToCurrency";
import { ProxyType, useProxyType } from "./proxyType";
import { findFloorTraficTier, useTrafic } from "./trafic";


const calculateTotals = (traficGb: number, paymentPeriod: PaymentPeriodType, proxyType: ProxyType) => {
  const tier = findFloorTraficTier(traficGb);
  const tierDiscountPct = tier.discountPct;
  const traficDiscountMultiplier = discountPctToMultiplier(tier.discountPct);
  const paymentPeriodDiscountPct = paymentPeriod === annualSubscription ? 50 : 0;
  const paymentPeriodDiscountMultiplier = discountPctToMultiplier(paymentPeriodDiscountPct);

  const subtotalPrice = traficGb * proxyType.price * paymentPeriod.billingPeriods;
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
  const proxyType = useProxyType();
  return calculateTotals(traficGb, paymentPeriod, proxyType);
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