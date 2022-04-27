import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, configure, localize } from 'vee-validate';
import en from 'vee-validate/dist/locale/en.json';
import * as rules from 'vee-validate/dist/rules';
import { RX_INPUT_BASE_VALIDATION, RX_INPUT_FORMATTED_PHONE } from '~/constants/regex';
import { comparePrices, formatPrice } from '~/utils/formatPrice';

extend('price_max_value', (value, max) => {
  if (value && comparePrices({ baseValue: value, maxValue: max.join() })) {
    return `Price must be below ${formatPrice({ price: max })}`;
  }

  return true;
});

extend('price_min_value', (value, min) => {
  if (value && comparePrices({ baseValue: min.join(), maxValue: value })) {
    return `Price must be ${formatPrice({ price: min })} or higher than`;
  }

  return true;
});

extend('phone', value => {
  if (value.match(RX_INPUT_FORMATTED_PHONE)) {
    return true;
  }

  return 'Please make sure you fill out the phone field completely';
});

// To avoid XSS attacks
extend('base-validation', value => {
  if (value.match(RX_INPUT_BASE_VALIDATION)) {
    return true;
  }

  return 'Special characters should not be used.';
});

// install rules and localization
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize('en', en);

// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

export default context => {
  configure({
    defaultMessage: (field, values) => {
      return context.app.i18n.t(`VEE_VALIDATE.MESSAGES.${values._rule_}`, values);
    },
  });
};
