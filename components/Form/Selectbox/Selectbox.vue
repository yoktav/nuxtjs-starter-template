<template>
  <div class="v-select-wrapper">
    <v-select
      v-model="formValue"
      :options="options"
      v-bind="attributes"
      :class="[{ 'is-valid': isValid }, { 'is-filled': isFilled }, { 'is-invalid': isInvalid }, { 'is-warning': isWarning }]"
      :append-to-body="appendToBody"
      :calculate-position="customPositioning"
      @search="$emit('search')"
    >
      <template #option="content">
        <slot name="option" :data="content" />
      </template>

      <div slot="no-options">No matching options.</div>

      <template #footer>
        <div class="v-select__label v-select__label--hidden"><slot /></div>

        <div class="v-select__label">
          <slot />
        </div>
      </template>
    </v-select>
  </div>
</template>

<script>
export default {
  props: {
    //
    // Initials
    //

    attributes: {
      type: Array,
      default: null,
    },
    value: {
      type: [String, Number, Object, Array],
      default: null,
    },
    options: {
      type: Array,
      default: () => [],
    },

    //
    // Options
    //

    hasLabel: {
      type: Boolean,
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: false,
    },

    //
    // States
    //

    isValid: {
      type: Boolean,
      default: false,
    },
    isInvalid: {
      type: Boolean,
      default: false,
    },
    isWarning: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      formValue: '',
      isFilled: false,
      hasPlaceholder: false,

      isInitialOpen: true,
      initialLeft: null,
    };
  },

  watch: {
    value() {
      this.formValue = this.value;
    },

    formValue() {
      this.hasPlaceholder = this.attributes && this.attributes.map(el => Object.keys(el).includes('placeholder'))[0];

      if (this.value != this.formValue) {
        this.$emit('input', this.formValue);
      }

      this.$nextTick(() => {
        this.makeInputFilled();
      });
    },
  },

  mounted() {
    this.formValue = this.value;

    this.makeInputFilled();
  },

  methods: {
    makeInputFilled() {
      if (this.hasPlaceholder) {
        this.isFilled = true;
        return;
      }

      this.isFilled = this.formValue && this.formValue.length != 0;
    },

    customPositioning(dropdownList, component, { width, top, left }) {
      dropdownList.style.top = top;
      dropdownList.style.width = width;

      if (this.isInitialOpen) {
        this.initialLeft = left;
        dropdownList.style.left = left;

        this.isInitialOpen = false;

        return;
      }

      dropdownList.style.left = this.initialLeft;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Input';
</style>
