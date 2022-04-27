<template>
  <label
    :class="['c-checkbox', { 'is-valid': isValid }, { 'is-filled': isFilled }, { 'is-invalid': isInvalid }, { 'is-warning': isWarning }]"
  >
    <input v-model="elementData" class="c-checkbox__input" v-bind="attributes" type="checkbox" />

    <svg-icon name="IconCheckmark" class="c-checkbox__icon" />

    <div class="c-checkbox__label">
      <div class="u-width-100%">
        <slot />
      </div>
    </div>
  </label>
</template>

<script>
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN } from '~/constants/props';

export default {
  props: {
    attributes: {
      type: PROP_TYPE_ARRAY,
      default: null,
    },
    value: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    isValid: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    isInvalid: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    isWarning: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
  },

  data() {
    return {
      isFilled: false,
      elementData: false,
    };
  },

  watch: {
    value() {
      this.$nextTick(() => {
        this.elementData = this.value;
      });
    },

    elementData() {
      this.$nextTick(() => {
        this.makeInputFilled();
        this.emitData();
      });
    },
  },

  mounted() {
    this.makeInputFilled();
    this.elementData = this.value;
  },

  methods: {
    makeInputFilled() {
      this.isFilled = this.elementData == true;
    },

    emitData() {
      this.$emit('input', this.elementData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../checkbox';
</style>
