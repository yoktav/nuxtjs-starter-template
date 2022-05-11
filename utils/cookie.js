import { HAS_WINDOW_SUPPORT, DOCUMENT, GET_ENV } from '~/constants/project/env';

export function getCookie(params) {
  // Specify `where` as `context.req.headers` to access a value in cookie from Nuxt middleware
  // CAUTION: Req is not available via nuxt generate

  const { name: cookie_name, where = DOCUMENT } = params;

  if (!HAS_WINDOW_SUPPORT && where === DOCUMENT) {
    return;
  }

  const name = cookie_name + '=';
  const decoded = decodeURIComponent(where.cookie); // To be careful
  const cookies = decoded.split('; ');

  let cookie;

  cookies.forEach(value => {
    if (value.indexOf(name) == 0) cookie = value.substring(name.length);
  });

  // 'undefined' is not equal to undefined with loose equal (weird)
  if (cookie == undefined || cookie == `${undefined}`) return undefined;
  if (cookie == null || cookie == `${null}`) return null;
  return cookie;
}

export function setCookie(params) {
  if (!HAS_WINDOW_SUPPORT) {
    return;
  }

  const { name, value, expires } = params;

  DOCUMENT.cookie = `${name}=${value};expires=${getCookieExpireTime({ expires })};path=${
    GET_ENV(process.env.NUXT_ENV_MODE).COOKIE_PATH_BASE
  }`;
}

export function getCookieExpireTime(params) {
  const { expires } = params;

  const date = new Date();
  date.setTime(date.getTime() + expires * 1000); // for Millisecond
  return date.toUTCString();
}

export function removeCookie(params) {
  if (!HAS_WINDOW_SUPPORT) {
    return;
  }

  const { name } = params;

  DOCUMENT.cookie = `${name}= ;expires=${getCookieExpireTime({ expires: 0 })};path=${GET_ENV(process.env.NUXT_ENV_MODE).COOKIE_PATH_BASE}`;
}
