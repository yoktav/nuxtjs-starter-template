<template>
  <label
    :class="[
      'c-radio-button',
      { 'c-radio-button--category': isCategory },
      { 'is-valid': isValid },
      { 'is-invalid': isInvalid },
      { 'is-warning': isWarning },
      { 'is-disabled': isDisabled },
    ]"
  >
    <input
      :id="id ? `radioButton-${id}` : false"
      ref="radioButton"
      type="radio"
      class="c-radio-button__input"
      :name="name ? name : false"
      :value="value ? value : false"
      :disabled="isDisabled"
      @change="$emit('input', $event.target.value)"
    />

    <div class="c-radio-button__content">
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
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
    isCategory: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import './RadioButton';
</style>
