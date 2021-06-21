<template>
  <label
    :class="[
      'c-date-picker',
      isValid ? 'is-valid' : null,
      isInvalid ? 'is-invalid' : null,
      isWarning ? 'is-warning' : null,
    ]"
  >
    <div v-if="hasLabelText" class="c-date-picker__text">{{ labelText }}</div>

    <DatePicker
      ref="datePicker"
      v-model="datePickerModel"
      class="c-date-picker__wrapper"
      :lang="lang"
      :range="range"
      format="DD-MM-YYYY"
      :name="name"
      :disabled="isDisabled"
      range-separator="/"
      @change="handleChange()"
    />
  </label>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/locale/tr';
import { getDateFromISO, getDateFromISOYearFirst } from '~/utils/getDate';

export default {
  components: { DatePicker },

  props: {
    range: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    hasLabelText: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isValid: {
      type: Boolean,
      default: false,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    isWarning: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      datePickerModel: null,
      datePickerValue: null,

      lang: {
        formatLocale: {
          firstDayOfWeek: 1,
        },
      },
    };
  },

  methods: {
    handleChange() {
      this.datePickerValue = getDateFromISO(this.datePickerModel);
      this.$emit('input', getDateFromISOYearFirst(this.datePickerModel));
    },
  },
};
</script>

<style lang="scss">
@import './DatePicker';
</style>
