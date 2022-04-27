<template>
  <div>This page is for an example of middleware level page redirection</div>
</template>

<script>
export default {
  layout: 'page',

  head() {
    return this.ROUTE_NAMES.FORBIDDEN.META;
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
};
</script>
