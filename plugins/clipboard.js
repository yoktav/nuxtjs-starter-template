import Vue from 'vue';
import VueClipboard from 'vue-clipboard2';

Vue.use(VueClipboard);

export default (content, inject) => {
  inject('copyTextWithToast', copyTextWithToast);
  content.$copyTextWithToast = copyTextWithToast;
};

export function copyTextWithToast(params) {
  const { text, toastSuccessMessage = 'Successfully Copied', toastErrorMessage = 'Copy Failed!' } = params;

  // For detail example see: https://www.npmjs.com/package/vue-clipboard2#sample-2
  this.$copyText(text).then(
    () => {
      this.$toast.success(toastSuccessMessage);
    },
    () => {
      this.$toast.error(toastErrorMessage);
    },
  );
}
