import Vue from 'vue';
import { ROUTE_NAMES } from '~/constants/routeNames';

Vue.mixin({
  data() {
    return {
      ROUTE_NAMES,
    };
  },
});
