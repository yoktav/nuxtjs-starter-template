import { GET_ENV } from '~/constants/project/env';

export default (content, inject) => {
  inject('GET_ENV', GET_ENV(process.env.NUXT_ENV_MODE));
  content.$GET_ENV = GET_ENV(process.env.NUXT_ENV_MODE);
};
