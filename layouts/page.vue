<template>
  <div class="o-layout">
    <Header />

    <div class="o-layout__wrapper">
      <Navbar class="o-layout__navbar" />

      <div class="o-layout__content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './Layout';
</style>
