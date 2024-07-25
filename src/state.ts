import { charm, useCharm } from "@kaigorod/charm";

const userCharm = charm(undefined);

export const login = () => userCharm.set({ name: "Dima" })
export const logout = () => userCharm.set(undefined)
export const useUser = () => useCharm(userCharm)
export const getUser = () => userCharm.get()