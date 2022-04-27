import { GET_ENV, HAS_WINDOW_SUPPORT, WINDOW } from '~/constants/project/env';

export function goToLoginPage() {
  if (!HAS_WINDOW_SUPPORT) {
    return;
  }

  WINDOW.location.assign(GET_ENV(process.env.NUXT_ENV_MODE).LOGIN_URL);
}
