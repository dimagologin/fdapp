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

// {
//     "googleProfile": {
//         "iss": "https://accounts.google.com",
//         "azp": "000000000000-0123456789abc0000000000000000000.apps.googleusercontent.com",
//         "aud": "123492348192-0123456789abc0000000000000000000.apps.googleusercontent.com",
//         "sub": "012345678912-12341234",
//         "email": "dima.kaigorodov@gmail.com",
//         "email_verified": true,
//         "nbf": 1348756123,
//         "name": "Dmitry Kaigorodov",
//         "picture": "https://lh3.googleusercontent.com/a/aajklsdflasdkfasldfjkasldfjkasdlfkasdlfaskdlk=s96-c",
//         "given_name": "Dmitry",
//         "family_name": "Kaigorodov",
//         "iat": 1238946781,
//         "exp": 6892789789,
//         "jti": "fklasdjflaksdflasdkjflasdfkasldfjkalsd"
//     }
// }

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
