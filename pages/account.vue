<template>
  <div class="container u-margin-top-large">
    <Breadcrumb class="u-margin-bottom" :links="BREADCRUMBS.ACCOUNT" />

    <div class="row">
      <div class="col col--xs-12 u-text-align-left">
        <h1 class="u-font-weight-600 u-margin-bottom-medium">Welcome to <b class="u-color-primary">Account Page !</b></h1>

        <Button theme="primary" tag="NuxtLink" :to="ROUTE_NAMES.HOME.PATH">Go to home </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { BREADCRUMBS } from '~/constants/routes';

export default {
  layout: 'page',

  data() {
    return {
      BREADCRUMBS,
    };
  },

  head() {
    return this.ROUTE_NAMES.ACCOUNT.META;
  },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.finish();
    });
  },
};
</script>
