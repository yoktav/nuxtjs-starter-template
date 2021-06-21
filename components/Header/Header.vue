<template>
  <div class="c-header">
    <header class="c-header__header">
      <div class="c-header__logo">
        <NuxtLink :to="localePath(ROUTE_NAMES.HOME.PATH)"> StarterTemplate </NuxtLink>
      </div>

      <div class="c-header__actions">
        <NuxtLink
          :to="localePath(ROUTE_NAMES.ACCOUNT.PATH)"
          class="c-header__item c-header__account"
        >
          <svg-icon name="IconUserCircle" title="Account" />

          <div class="u-font-size-large u-margin-left-auto u-display-none@md-down">
            {{ $t('COMPONENTS.HEADER.MY_ACCOUNT') }}
          </div>
        </NuxtLink>
      </div>
    </header>
  </div>
</template>

<script>
import { ROUTE_NAMES } from '~/project-constants/routeNames';

export default {
  data() {
    return {
      ROUTE_NAMES,
    };
  },
};
</script>

<style lang="scss" scoped>
@import './Header';
</style>
