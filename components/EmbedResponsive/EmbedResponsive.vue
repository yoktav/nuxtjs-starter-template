<template>
  <div :class="['c-embed-responsive', `c-embed-responsive--${ratio}`]">
    <iframe class="c-embed-responsive__item" :src="src ? src : false"></iframe>
  </div>
</template>

<script>
export default {
  props: {
    ratio: {
      type: String,
      required: true,
      default: '16by9',
    },

    src: {
      type: String,
      required: true,
      default: null,
    },
  },
};
</script>

<style lang="scss">
@import './EmbedResponsive';
</style>
