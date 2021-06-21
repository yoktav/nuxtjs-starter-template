<template>
  <div ref="tooltip" class="c-tooltip" :data-tippy-content="content">
    <slot />
  </div>
</template>

<script>
import tippy, { animateFill } from 'tippy.js';
import { MOBILE_THRESHOLD_VALUE } from '~/project-constants/breakpoints';

export default {
  props: {
    content: {
      type: String,
      default: 'Tooltip Content',
      required: true,
    },
    theme: {
      type: String,
      default: 'material',
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    animateFill: {
      type: Boolean,
      default: true,
    },
    interactive: {
      type: Boolean,
      default: false,
    },
    hideOnMobile: {
      type: Boolean,
      default: false,
    },
    maxWidth: {
      type: Number,
      default: 350,
    },
    offset: {
      type: Array,
      default: () => [0, 4],
    },
  },

  data() {
    return {
      tooltip: null,
    };
  },

  mounted() {
    this.initTooltip();
  },

  updated() {
    this.destroyTooltip();
    this.initTooltip();
  },

  methods: {
    initTooltip() {
      this.tooltip = tippy(this.$refs.tooltip, {
        animateFill: this.animateFill,
        theme: this.theme,
        plugins: [animateFill],
        offset: this.offset,
        interactive: this.interactive,
        allowHTML: true,
        placement: this.placement,
        maxWidth: this.maxWidth,
      });

      if (this.hideOnMobile && document.body.clientWidth < MOBILE_THRESHOLD_VALUE) {
        this.tooltip.disable();
      }
    },
    destroyTooltip() {
      this.tooltip.destroy();
    },
  },
};
</script>

<style lang="scss">
// Since tippy.js mounted to document.body, its styles should not be scoped
@import './Tooltip';
</style>
