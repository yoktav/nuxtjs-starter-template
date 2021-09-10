import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import './vueToasted.scss';

Vue.use(VueToast, {
  position: 'top-right',
  duration: 3000,
  dismissible: true,
  queue: false,
  pauseOnHover: true,
});
