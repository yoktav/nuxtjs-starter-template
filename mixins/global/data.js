import Vue from 'vue';
import { ROUTE_NAMES } from '~/constants/routes';

Vue.mixin({
  data() {
    return {
      ROUTE_NAMES,
    };
  },
});
