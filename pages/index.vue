<template>
  <div class="container u-margin-top-large">
    <div class="row">
      <div class="col col--xs-12 u-text-align-left">
        <h1 class="u-font-weight-600 u-margin-bottom-medium">
          Hello <b class="u-color-primary">World !</b>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'page',

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/abstracts/index';
</style>
