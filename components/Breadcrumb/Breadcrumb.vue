<template>
  <ul class="c-breadcrumb">
    <li class="c-breadcrumb__item c-breadcrumb__item--home">
      <NuxtLink class="c-breadcrumb__link" :to="ROUTE_NAMES.HOME.PATH">
        <svg-icon name="IconHome" title="Anasayfa" />
      </NuxtLink>
    </li>

    <li v-for="(link, i) in links" :key="i" class="c-breadcrumb__item">
      <svg-icon name="IconChevronRight" class="c-breadcrumb__icon" :title="link.text" />

      <NuxtLink v-if="link.to" :to="link.to" class="c-breadcrumb__link">
        {{ link.text }}
      </NuxtLink>

      <span v-else>{{ link.text }}</span>
    </li>
  </ul>
</template>

<script>
import { PROP_TYPE_ARRAY } from '~/constants/props';

export default {
  props: {
    links: {
      type: PROP_TYPE_ARRAY,
      default: null,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Breadcrumb';
</style>
