<template>
  <div :class="['c-base-card', theme ? `c-base-card--${theme}` : null]">
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './BaseCard';
</style>
