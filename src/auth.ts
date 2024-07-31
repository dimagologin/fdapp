import { httpApi } from './api';
import { authUser } from './state';

export const signup = async (
  username: string,
  password: string,
  password_confirmation: string,
) => {
  const result = await httpApi(
    'user/signup',
    {
      username,
      password,
      password_confirmation,
    },
    {
      auth: false,
    },
  );
  if (result.token) {
    localStorage.auth = JSON.stringify({
      username,
      token: result.token,
    });
    authUser(username);
    return {
      ok: 1,
      username,
    };
  } else {
    return {
      ok: 0,
      message: result.message,
    };
  }
};

export const login = async (
  username: string,
  password: string,
) => {
  const result = await httpApi(
    'user/signin',
    {
      username,
      password,
    },
    {
      auth: false,
    },
  );
  if (result.token) {
    localStorage.auth = JSON.stringify({
      username,
      token: result.token,
    });
    authUser(username);
    return {
      ok: 1,
      username,
    };
  } else {
    return {
      ok: 0,
      message: result.message,
    };
  }
};

export const signin = async (username: string, password: string) => {
  try {
    const result = await signup(username, password, password);
    if (result.ok) {
      return result;
    }
  } catch (e) {
    console.error(e);
  }
  return await login(username, password);
};

export const getAuthStorage = () => {
  return JSON.parse(localStorage.auth);
};
export const getUsername = () => {
  return getAuthStorage().username;
};
