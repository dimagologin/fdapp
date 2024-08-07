export const isLocalhost = window.location.hostname === 'localhost';
export const isProd =
  window.location.hostname === 'floppydata.com' ||
  window.location.hostname === 'fdapp.pages.dev' // because staging does not work with httpS
  ;

const base = isProd
  ? 'https://api.floppydata.com/v1/'
  : 'http://139.162.187.132:10082/v1/';

export const httpApi = async (
  uri = '',
  params = {},
  { method = 'POST', auth = true } = { method: 'POST', auth: true } as { method?: "POST" | "GET", auth?: boolean },
) => {
  if (!uri) {
    throw new Error('!uri');
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json; charset=utf-8',
  };
  if (auth) {
    const token = JSON.parse(localStorage.auth).token;
    headers.Authorization = `Bearer ${token}`;
    // headers['Access-Control-Allow-Headers'] = 'Authorization'
  }
  console.info(auth, headers);

  // const mode = isProd ? 'cors' : 'no-cors';
  const mode = 'cors';
  const resp = await fetch(`${base}${uri}`, {
    method,
    mode,
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
  const result = await resp.json();
  return result;
};
