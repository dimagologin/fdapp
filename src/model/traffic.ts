import { charm, useCharm } from '@kaigorod/charm';

const trafficCharm = charm<number>(12);
export const setTrafic = (value: number) => trafficCharm.set(value);
export const getTrafic = () => trafficCharm.get();
export const useTrafic = () => useCharm(trafficCharm);

export type TraficTierType = {
  name: string;
  amountGb: number;
  discountPct: number;
};

export const trafficTiers: TraficTierType[] = [
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
 * Trafic tiers should be sorted from low to high amount of traffic
 */
const validateTiers = (trafficTiers: TraficTierType[]) => {
  if (!trafficTiers) {
    throw new Error('Failed to validate traffic tiers');
  }
  if (!trafficTiers[0]) {
    throw new Error('Failed to validate traffic tiers');
  }
  if (trafficTiers[0].discountPct > 0) {
    throw new Error('Failed to validate traffic tiers');
  }
  for (let i = 1; i < trafficTiers.length; i++) {
    if (trafficTiers[i - 1].amountGb >= trafficTiers[i].amountGb) {
      console.error({ trafficTiers, i });
      throw new Error('Failed to validate traffic tiers');
    }
    if (trafficTiers[i - 1].discountPct > trafficTiers[i].discountPct) {
      throw new Error('Failed to validate traffic tiers');
    }
  }
};
validateTiers(trafficTiers);

export const findFloorTraficTier = (trafficGb: number) => {
  for (let i = trafficTiers.length - 1; i >= 0; i--) {
    if (trafficGb >= trafficTiers[i].amountGb) {
      return trafficTiers[i];
    }
  }
  return trafficTiers[0];
};
