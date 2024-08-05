import { charm, useCharm } from "@kaigorod/charm";
import { guessCurrency } from "./localeToCurrency";

const currencyCharm = charm<string>(guessCurrency());
export const useCurrency = () => useCharm(currencyCharm)
export const setCurrency = (value: string) => currencyCharm.set(value)
