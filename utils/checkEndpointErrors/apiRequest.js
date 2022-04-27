import { HTTP_CODES } from '~/constants/http-codes';
import { goToLoginPage } from '../auth';

export function checkApiResponseErrors(params) {
  const { that, response } = params;

  if (response.status == HTTP_CODES.SUCCESS.code) {
    return false;
  }

  if (process.env.NODE_ENV == 'development') console.log(response);

  if (that) that.$toast.warning(`An error occured (${response.status} - ${response.statusText})`);

  return true;
}

export function checkApiRequestErrors(params) {
  const { error, that, showToast, redirectToLogin = true } = params;

  if (process.env.NODE_ENV == 'development') console.log(error);

  if (error.message.includes(HTTP_CODES.UNAUTHORIZED.code) && redirectToLogin) {
    goToLoginPage();
  }

  if (showToast) that.$toast.error(error.response.data.message);

  return error.response;
}
