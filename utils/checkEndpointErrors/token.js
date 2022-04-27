import { ONE_MINUTE_AS_MS } from '~/constants/global';
import { GET_ENV } from '~/constants/env';
import { getCookie } from '~/utils/cookie';

export function getToken() {
  if (!getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN_TYPE }) || !getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN })) {
    return false;
  }

  return getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN });
}

export function getTokenFull() {
  if (!getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN_TYPE }) || !getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN })) {
    return false;
  }

  return `${getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN_TYPE })} ${getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN })}`;
}

export function isCookieTokenExpired() {
  const tokenExpireDateFromCookie = getCookie({ name: GET_ENV().COOKIE_NAME_TOKEN_EXPIRE });

  if (!tokenExpireDateFromCookie) return false;

  const tokenExpireDate = new Date(tokenExpireDateFromCookie);
  const now = new Date();

  const remainingMinuteForExpire = (tokenExpireDate.getTime() - now.getTime()) / ONE_MINUTE_AS_MS;

  return remainingMinuteForExpire < 1;
}
