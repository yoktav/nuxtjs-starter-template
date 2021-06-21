<template>
  <component
    :is="tag"
    :class="[
      'c-button',
      `c-button--${theme}`,
      { 'c-button--small': isSmall },
      { 'c-button--circle': isCircle },
      { 'is-disabled': isDisabled },
    ]"
    :href="href ? href : false"
    :type="type ? type : false"
    :to="to ? to : false"
    :disabled="isDisabled ? isDisabled : false"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'a',
      required: true,
    },
    theme: {
      type: String,
      default: 'primary',
      required: false,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    isCircle: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Button';
</style>
