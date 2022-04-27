<template>
  <label
    :class="[
      'c-input',
      { 'is-valid': isValid },
      { 'is-filled': isFilled },
      { 'is-invalid': isInvalid },
      { 'is-warning': isWarning },
      { 'has-expand-on-focus': expandOnFocus },
    ]"
  >
    <input
      ref="input"
      class="c-input__control"
      :value="value ? value : null"
      v-bind="attributes"
      @[eventHandlerName]="$emit('input', $event.target.value)"
    />

    <span v-if="hasLabel" class="c-input__label">
      <span>
        <slot />
      </span>
    </span>
  </label>
</template>

<script>
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER_STRING, PROP_TYPE_STRING } from '~/constants/props';
import { formatPrice } from '~/utils/formatPrice';
import { maskPhone } from '~/utils/mask';
import { stripNonNumericWithoutComma } from '~/utils/stripNonNumeric';

export default {
  props: {
    attributes: {
      type: PROP_TYPE_ARRAY,
      default: null,
    },
    value: {
      type: PROP_TYPE_NUMBER_STRING,
      default: null,
    },
    eventHandlerName: {
      type: PROP_TYPE_STRING,
      default: 'change',
    },
    hasLabel: {
      type: PROP_TYPE_BOOLEAN,
      default: true,
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
    expandOnFocus: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    format: {
      type: PROP_TYPE_STRING,
      default: 'input',
    },
  },

  data() {
    return {
      isFilled: false,
    };
  },

  watch: {
    value() {
      this.$nextTick(() => {
        this.checkFormatValue();

        this.makeInputFilled();
      });
    },
  },

  mounted() {
    this.checkFormatValue();
    this.makeInputFilled();

    setTimeout(() => {
      this.makeInputFilled();
    }, 750);
  },

  methods: {
    makeInputFilled() {
      this.isFilled = this.$refs.input?.value.length != 0;
    },

    checkFormatValue() {
      if (!this.value) return;

      if (this.format == 'price') {
        this.$emit(
          'input',
          formatPrice({ price: stripNonNumericWithoutComma(this.value.toString()).replace(',', '.'), moveSymbolToEnd: false }),
        );
      } else if (this.format == 'phone') {
        this.$emit('input', maskPhone(this.value));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Input';
</style>
