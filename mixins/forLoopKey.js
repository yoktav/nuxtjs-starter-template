import Vue from 'vue';
import { randomKey } from '~/utils/randomKey';

Vue.mixin({
  methods: {
    forLoopKey() {
      return randomKey();
    },
  },
});
