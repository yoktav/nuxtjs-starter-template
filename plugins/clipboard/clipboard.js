import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

import { MOBILE_THRESHOLD_VALUE } from '~/project-constants/breakpoints';

Vue.use(VueClipboard);

export default (content, inject) => {
  inject('copyTextWithToast', copyTextWithToast);
  content.$copyTextWithToast = copyTextWithToast;
};

export function copyTextWithToast(params) {
  const { text } = params;

  let toastOptions;

  if (document.body.clientWidth < MOBILE_THRESHOLD_VALUE) {
    toastOptions = {
      position: 'top',
      duration: 2000,
      dismissible: true,
      queue: true,
      pauseOnHover: false,
    };
  } else {
    toastOptions = {
      position: 'top-right',
      duration: 3000,
      dismissible: true,
      queue: false,
      pauseOnHover: true,
    };
  }

  // For detail example see: https://www.npmjs.com/package/vue-clipboard2#sample-2
  this.$copyText(text).then(
    () => {
      this.$toast.success('Successfully copied', toastOptions);
    },
    () => {
      this.$toast.error('Copy Failed!', toastOptions);
    },
  );
}
