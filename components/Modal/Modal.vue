<template>
  <transition name="modal">
    <div v-if="value" class="c-modal">
      <div class="c-modal__background" @click="closeModal"></div>

      <div class="c-modal__container">
        <button type="button" class="c-modal__close" @click="closeModal">
          <Tooltip content="Kapat" :hide-on-mobile="true">
            <svg-icon name="IconCross" class="u-cursor-pointer" />
          </Tooltip>
        </button>

        <div class="c-modal__content-wrapper">
          <h3 class="c-modal__title">
            <slot name="header" />
          </h3>

          <p class="c-modal__description">
            <slot name="description" />
          </p>

          <div class="c-modal__content">
            <slot name="content" />
          </div>

          <div class="u-margin-top-large u-display-flex u-justify-content-center">
            <slot name="footer">
              <Button theme="primary" type="button" tag="button" @click.native="closeModal">
                Close
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeModal() {
      this.$emit('input', false);
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
