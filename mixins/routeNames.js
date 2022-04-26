import Vue from 'vue';
import { ROUTE_NAMES } from '~/constants/routes/route-names';

Vue.mixin({
  data() {
    return {
      ROUTE_NAMES,
    };
  },
});
