import Vue from 'vue';
import {
  checkGraphQLRequestErrors,
  checkApiRequestErrors,
  checkApiResponseErrors,
} from '~/utils/checkEndpointErrors';

Vue.mixin({
  methods: {
    checkGraphQLRequestErrors,
    checkApiRequestErrors,
    checkApiResponseErrors,
  },
});
