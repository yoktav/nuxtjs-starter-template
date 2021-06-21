<template>
  <div :class="['c-badge', `c-badge--${theme}`]">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
      default: 'info',
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Badge';
</style>
