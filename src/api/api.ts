export const isLocalhost = window.location.hostname === 'localhost';
export const isProd =
  window.location.hostname === 'floppydata.com' ||
  window.location.hostname === 'fdapp.pages.dev' // because staging does not work with httpS
  ;

const base = isProd
  ? 'https://api.floppydata.com/v1/'
  : 'http://139.162.187.132:10082/v1/';

export const authHttpApi = async (
  uri: string,
  params: any,
) => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json; charset=utf-8',
    // no Authorization header, as we doing signin/signup
  };
  return await basicHttpApi(uri, params, headers, 'POST')
}

export const httpApi = async (
  uri = '',
  params: any,
  method: 'POST' | 'GET' = 'POST',
) => {
  const token = JSON.parse(localStorage.auth).token;

  const headers: HeadersInit = {
    'Content-Type': 'application/json; charset=utf-8',
    Authorization: `Bearer ${token}`
  };
  return await basicHttpApi(uri, params, headers, method)
}

export const basicHttpApi = async (
  uri = '',
  params = {},
  headers: HeadersInit,
  method: 'POST' | 'GET',
) => {
  if (!uri) {
    throw new Error('!uri');
  }

  const resp = await fetch(`${base}${uri}`, {
    method,
    headers,
    body: JSON.stringify(params),
  });
  if (resp.status >= 400) {
    try {
      console.error(resp.statusText);
      console.error(resp.text);
      console.error(resp.headers);
    } catch (e) {
      // intentionally ignore
    }
    throw new Error('Request failed: ' + resp.status);
  }
  const result = resp.headers.get("Content-Length") !== '0' ?
    await resp.json() : {}
  return result;
};
