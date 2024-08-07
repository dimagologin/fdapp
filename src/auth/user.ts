import { charm, useCharm } from '@kaigorod/charm';
import { getUserFromLocalStorage } from './auth';

export type GoogleProfile = {
  "iss": "https://accounts.google.com",
  "azp": string,
  "aud": string,
  "sub": string,
  "email": string,
  "email_verified": boolean,
  "nbf": number,
  "name": string,
  "picture": string,
  "given_name": string,
  "family_name": string,
  "iat": number,
  "exp": number,
  "jti": string
}

export type UserType = {
  email: string;
  googleProfile?: GoogleProfile;
}

const userCharm = charm<undefined | UserType>(
  getUserFromLocalStorage(),
);
export const authentificateUser = (user: UserType) => userCharm.set(user);
export const clearUser = () => userCharm.set(undefined);
export const useUser = () => useCharm(userCharm);
export const getUser = () => userCharm.get();
