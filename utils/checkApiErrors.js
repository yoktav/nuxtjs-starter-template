import { TOAST_OPTIONS } from '~/project-constants/global';

export function checkApiResponseErrors(params) {
  const { that, response } = params;

  if (response.status == 200) {
    return false;
  }

  if (process.env.NUXT_ENV_MODE === 'development') console.log(response);

  that.$toast.warning(
    `Bir hata oluştu (${response.status} - ${response.statusText})`,
    TOAST_OPTIONS,
  );

  return true;
}

export function checkApiRequestErrors(params) {
  const { error } = params;

  if (process.env.NUXT_ENV_MODE === 'development') {
    // Throwing an error causes to Nuxt shows 500 error page
    throw new Error(error);
  } else {
    console.log(error);
  }
}
