import Vue from 'vue';
import { randomKey } from '~/utils/randomKey';

import { checkApiRequestErrors, checkApiResponseErrors } from '~/utils/checkEndpointErrors';

Vue.mixin({
  methods: {
    checkApiRequestErrors,
    checkApiResponseErrors,

    forLoopKey() {
      return randomKey();
    },
  },
});
