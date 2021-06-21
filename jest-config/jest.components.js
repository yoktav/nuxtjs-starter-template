// Imports
import Vue from 'vue';
import { RouterLinkStub } from '@vue/test-utils';

import Header from '../components/Header/Header.vue';
import Alert from '../components/Alert/Alert.vue';
import Avatar from '../components/Avatar/Avatar.vue';
import BaseCard from '../components/BaseCard/BaseCard.vue';
import Button from '../components/Button/Button.vue';
import Navbar from '../components/Navbar/Navbar.vue';
import TimeLine from '../components/TimeLine/TimeLine.vue';
import Tooltip from '../components/Tooltip/Tooltip.vue';

// Components
Vue.component('Header', Header);
Vue.component('Alert', Alert);
Vue.component('Avatar', Avatar);
Vue.component('BaseCard', BaseCard);
Vue.component('Button', Button);
Vue.component('Navbar', Navbar);
Vue.component('TimeLine', TimeLine);
Vue.component('Tooltip', Tooltip);
Vue.component('NuxtLink', RouterLinkStub);

Vue.component('SvgIcon', {
  template: '<div></div>',
});

// Directives
Vue.directive('lazy-load', {});
