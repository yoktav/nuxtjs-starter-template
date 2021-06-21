<template>
  <div :class="['c-alert', `c-alert--${theme}`, { 'has-close-button': isClosable }]">
    <svg-icon v-if="hasIcon" :name="iconName" class="c-alert__icon" :title="iconTitle" />

    <div>
      <slot />
    </div>

    <button v-if="isClosable" class="c-alert__close" type="button" @click="deleteAlert">
      <svg-icon name="IconCross" title="Close" />
    </button>
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
    hasIcon: {
      type: Boolean,
      default: true,
    },
    iconName: {
      type: String,
      default: 'info',
    },
    iconTitle: {
      type: String,
      default: 'info',
    },
    isClosable: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      DELETING_CLASS: 'is-deleting',
    };
  },

  methods: {
    deleteAlert() {
      this.$el.classList.toggle(this.DELETING_CLASS);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Alert';
</style>
