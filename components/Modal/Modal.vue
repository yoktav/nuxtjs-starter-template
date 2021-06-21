<template>
  <transition name="modal">
    <div v-if="modalState" class="c-modal">
      <div class="c-modal__background" @click="$emit('closeModal')"></div>

      <div class="c-modal__container">
        <button type="button" class="c-modal__close" @click="$emit('closeModal')">
          <Tooltip content="Close" :hide-on-mobile="true">
            <svg-icon name="IconCross" class="u-cursor-pointer" />
          </Tooltip>
        </button>

        <div class="c-modal__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    modalState: {
      type: Boolean,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './Modal';

.modal-enter-active,
.modal-leave-active {
  opacity: 1;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;
  transform: translateY(-16px); // stylelint-disable-line meowtec/no-px
}
</style>
