import Vue from 'vue';
import { ROUTE_NAMES } from '~/constants/project/routes';

Vue.mixin({
  data() {
    return {
      ROUTE_NAMES,
    };
  },
});
