//
// Some parts of this file is inherited from Bootstrap Vue
// https://github.com/bootstrap-vue/bootstrap-vue
//

import { RX_INPUT_BASE_VALIDATION } from '../regex';

export const HAS_WINDOW_SUPPORT = typeof window !== 'undefined';
export const HAS_DOCUMENT_SUPPORT = typeof document !== 'undefined';

export const WINDOW = HAS_WINDOW_SUPPORT ? window : {};
export const DOCUMENT = HAS_DOCUMENT_SUPPORT ? document : {};

export const STATIC_ENV_LIST = {
  //
  // Cookie
  //

  COOKIE_PATH_BASE: '/',
  COOKIE_NAME_TOKEN: 'token-name',
  COOKIE_NAME_TOKEN_TYPE: 'token-type',
  COOKIE_NAME_TOKEN_EXPIRE: 'token-expire',

  INPUT_BASE_VALIDATE_REGEX: RX_INPUT_BASE_VALIDATION,
};

export const DYNAMIC_ENV_LIST = {
  LOGIN_URL: {
    live: 'https://live.example-login.com',
    dev: 'https://dev.example-login.com',
    local: 'https://local.example-login.com',
  },
  API_BASE: {
    live: 'https://live.example-api.com',
    dev: 'https://dev.example-api.com',
    local: 'https://local.example-api.com',
  },
};

export const GET_ENV = mode => {
  const mergedEnvList = {
    ...STATIC_ENV_LIST,
  };

  Object.keys(DYNAMIC_ENV_LIST).forEach(currentItem => {
    mergedEnvList[currentItem] = DYNAMIC_ENV_LIST[currentItem][mode];
  });

  return mergedEnvList;
};
