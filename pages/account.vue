<template>
  <div class="container u-margin-top-large">
    <div class="row">
      <div class="col col--xs-12 u-text-align-left">
        <h1 class="u-font-weight-600 u-margin-bottom-medium">
          Welcome to <b class="u-color-primary">Account Page !</b>
        </h1>

        <Button theme="primary" tag="NuxtLink" :to="ROUTE_NAMES.HOME.PATH">Go to home </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
};
</script>
