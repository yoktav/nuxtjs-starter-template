<template>
  <nav class="c-navbar">
    <div class="c-navbar__container">
      <Tooltip placement="right" :hide-on-mobile="true" content="Menu Item 1">
        <NuxtLink :to="localePath(ROUTE_NAMES.HOME.PATH)" class="c-navbar__link">
          <svg-icon name="IconUser" />
        </NuxtLink>
      </Tooltip>

      <Tooltip placement="right" :hide-on-mobile="true" content="Menu Item 2">
        <NuxtLink :to="localePath(ROUTE_NAMES.PAGE.PATH)" class="c-navbar__link">
          <svg-icon name="IconUser" />
        </NuxtLink>
      </Tooltip>

      <Tooltip placement="right" :hide-on-mobile="true" content="Menu Item 3">
        <NuxtLink :to="localePath(ROUTE_NAMES.PAGE.PATH)" class="c-navbar__link">
          <svg-icon name="IconUser" />
        </NuxtLink>
      </Tooltip>

      <Tooltip placement="right" :hide-on-mobile="true" content="Menu Item 4">
        <NuxtLink :to="localePath(ROUTE_NAMES.PAGE.PATH)" class="c-navbar__link">
          <svg-icon name="IconUser" />
        </NuxtLink>
      </Tooltip>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@import './Navbar';
</style>
