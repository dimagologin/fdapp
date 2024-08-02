import { charm, useCharm } from '@kaigorod/charm';

const userCharm = charm<undefined | { email: string }>(undefined);
export const authentificateUser = (email: string) => userCharm.set({ email });
export const clearUser = () => userCharm.set(undefined);
export const useUser = () => useCharm(userCharm);
export const getUser = () => userCharm.get();
