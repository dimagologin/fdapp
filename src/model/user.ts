import { charm, useCharm } from '@kaigorod/charm';
import { getUserFromLocalStorage } from '../api/auth';

const userCharm = charm<undefined | { email: string }>(getUserFromLocalStorage());
export const authentificateUser = (email: string) => userCharm.set({ email });
export const clearUser = () => userCharm.set(undefined);
export const useUser = () => useCharm(userCharm);
export const getUser = () => userCharm.get();
