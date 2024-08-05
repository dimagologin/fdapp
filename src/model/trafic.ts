import { charm, useCharm } from '@kaigorod/charm';

const traficCharm = charm<number>(12);
export const setTrafic = (value: number) => traficCharm.set(value);
export const getTrafic = () => traficCharm.get();
export const useTrafic = () => useCharm(traficCharm);

export type TraficTierType = {
  name: string;
  amountGb: number;
  discountPct: number;
};

export const traficTiers: TraficTierType[] = [
  {
    name: '12 Gb',
    amountGb: 12,
    discountPct: 0,
  },
  {
    name: '48 Gb',
    amountGb: 48,
    discountPct: 10,
  },
  {
    name: '96 Gb',
    amountGb: 96,
    discountPct: 20,
  },
  {
    name: '120 Gb',
    amountGb: 120,
    discountPct: 30,
  },
];

/**
 * Trafic tiers should be sorted from low to high amount of trafic
 */
const validateTiers = (traficTiers: TraficTierType[]) => {
  if (!traficTiers) {
    throw new Error('Failed to validate trafic tiers');
  }
  if (!traficTiers[0]) {
    throw new Error('Failed to validate trafic tiers');
  }
  if (traficTiers[0].discountPct > 0) {
    throw new Error('Failed to validate trafic tiers');
  }
  for (let i = 1; i < traficTiers.length; i++) {
    if (traficTiers[i - 1].amountGb >= traficTiers[i].amountGb) {
      console.error({ traficTiers, i });
      throw new Error('Failed to validate trafic tiers');
    }
    if (traficTiers[i - 1].discountPct > traficTiers[i].discountPct) {
      throw new Error('Failed to validate trafic tiers');
    }
  }
};
validateTiers(traficTiers);

export const findFloorTraficTier = (traficGb: number) => {
  for (let i = traficTiers.length - 1; i >= 0; i--) {
    if (traficGb >= traficTiers[i].amountGb) {
      return traficTiers[i];
    }
  }
  return traficTiers[0];
};
