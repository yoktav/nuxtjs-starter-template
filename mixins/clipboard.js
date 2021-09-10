import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import { TOAST_OPTIONS } from '~/constants/global';

Vue.use(VueClipboard);

export default (content, inject) => {
  inject('copyTextWithToast', copyTextWithToast);
  content.$copyTextWithToast = copyTextWithToast;
};

export function copyTextWithToast(params) {
  const { text } = params;

  // For detail example see: https://www.npmjs.com/package/vue-clipboard2#sample-2
  this.$copyText(text).then(
    () => {
      this.$toast.success('Successfully copied', TOAST_OPTIONS);
    },
    () => {
      this.$toast.error('Copy Failed!', TOAST_OPTIONS);
    },
  );
}
