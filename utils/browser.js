import { HAS_WINDOW_SUPPORT, WINDOW } from '~/constants/env';
import { GET_ENV } from '~/constants/project/env';
import { isUndefinedOrNullOrEmpty } from './inspect';

export function openInNewTab(url) {
  if (!HAS_WINDOW_SUPPORT && isUndefinedOrNullOrEmpty(url)) {
    return;
  }

  WINDOW.open(url, '_blank').focus();
}

export function goToLoginPage() {
  if (!HAS_WINDOW_SUPPORT) {
    return;
  }

  WINDOW.location.assign(GET_ENV(process.env.NUXT_ENV_MODE).LOGIN_URL);
}
