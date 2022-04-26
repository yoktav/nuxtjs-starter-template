import Vue from 'vue';
import { checkApiRequestErrors, checkApiResponseErrors } from '~/utils/checkEndpointErrors';

Vue.mixin({
  methods: {
    checkApiRequestErrors,
    checkApiResponseErrors,
  },
});
