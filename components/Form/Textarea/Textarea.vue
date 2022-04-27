<template>
  <label :class="['c-input', { 'is-valid': isValid }, { 'is-filled': isFilled }, { 'is-invalid': isInvalid }, { 'is-warning': isWarning }]">
    <textarea
      v-model="formValue"
      class="c-input__control c-input__control--textarea"
      v-bind="attributes"
      @[eventHandlerName]="$emit('input', formValue)"
    />

    <span v-if="hasLabel" class="c-input__label">
      <span>
        <slot />
      </span>
    </span>
  </label>
</template>

<script>
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER_STRING, PROP_TYPE_STRING } from '~/constants/props';

export default {
  props: {
    attributes: {
      type: PROP_TYPE_ARRAY,
      default: null,
    },
    value: {
      type: PROP_TYPE_NUMBER_STRING,
      default: null,
    },
    eventHandlerName: {
      type: PROP_TYPE_STRING,
      default: 'change',
    },
    hasLabel: {
      type: PROP_TYPE_BOOLEAN,
      default: true,
    },
    isValid: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    isInvalid: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    isWarning: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
  },

  data() {
    return {
      formValue: '',
      isFilled: false,
    };
  },

  watch: {
    value() {
      this.$nextTick(() => {
        this.formValue = this.value;

        this.makeInputFilled();
      });
    },
  },

  mounted() {
    this.formValue = this.value;

    this.makeInputFilled();
  },

  methods: {
    makeInputFilled() {
      this.isFilled = this.formValue && this.formValue.length != 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Input';
</style>
