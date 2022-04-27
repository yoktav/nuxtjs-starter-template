<template>
  <label
    :class="[
      'c-radio-button',
      { 'c-radio-button--category': isCategory },
      { 'is-checked': value === data },
      { 'is-invalid': isInvalid },
      { 'is-invalid': isInvalid },
      { 'is-warning': isWarning },
      { 'is-disabled': isDisabled },
    ]"
  >
    <input
      :id="id ? `radioButton-${id}` : false"
      ref="radioButton"
      type="radio"
      :name="name ? name : false"
      :value="data"
      :disabled="isDisabled"
      class="c-radio-button__input"
      @change="$emit('input', elementData)"
    />

    <div class="c-radio-button__content">
      <slot>
        {{ data }}
      </slot>
    </div>
  </label>
</template>

<script>
import { PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER, PROP_TYPE_OBJECT_STRING, PROP_TYPE_STRING } from '~/constants/props';

export default {
  props: {
    id: {
      type: PROP_TYPE_NUMBER,
      default: null,
    },
    value: {
      type: PROP_TYPE_OBJECT_STRING,
      default: '',
    },
    data: {
      required: true,
      type: PROP_TYPE_OBJECT_STRING,
    },
    name: {
      type: PROP_TYPE_STRING,
      default: null,
    },
    isDisabled: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
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
    isCategory: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
  },

  data() {
    return {
      elementData: null,
    };
  },

  watch: {
    value() {
      this.elementData = this.data;
    },
  },

  mounted() {
    this.elementData = this.data;
  },
};
</script>

<style lang="scss" scoped>
@import './RadioButton';
</style>
