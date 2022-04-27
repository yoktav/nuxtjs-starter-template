<template>
  <label
    :class="[
      'c-input',
      'c-input--togglable',
      { 'is-valid': isValid },
      { 'is-invalid': isInvalid },
      { 'is-warning': isWarning },
      { 'is-type-toggled': isTypeToggled },
      { 'is-filled': isFilled },
    ]"
  >
    <input
      ref="input"
      :type="type"
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

    <button ref="tooltip" type="button" class="c-input__toggle-type" @click="toggleType">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
        <path
          d="M10 4.861c-3.586 0-6.695 2.088-8.222 5.139 1.528 3.051 4.636 5.139 8.222 5.139s6.695-2.088 8.222-5.139C16.695 6.949 13.586 4.861 10 4.861zm4.054 2.725a7.82 7.82 0 012.4 2.414 7.83 7.83 0 01-2.4 2.414 7.53 7.53 0 01-8.108 0A7.82 7.82 0 013.546 10a7.83 7.83 0 012.59-2.531 4.112 4.112 0 107.728 0c.064.038.127.077.19.117zM10 8.458a1.542 1.542 0 11-3.084 0 1.542 1.542 0 013.084 0z"
        />
      </svg>
    </button>
  </label>
</template>

<script>
import tippy, { animateFill } from 'tippy.js';
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN, PROP_TYPE_NUMBER_STRING, PROP_TYPE_STRING } from '~/constants/props';

const TYPES = {
  INITIAL: {
    TYPE: 'password',
    TOOLTIP: 'Show Password',
  },
  PASSWORD: {
    TYPE: 'password',
    TOOLTIP: 'Show Password',
  },
  TEXT: {
    TYPE: 'text',
    TOOLTIP: 'Hide Password',
  },
};

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
  },

  data() {
    return {
      tooltip: null,
      isTypeToggled: false,
      isFilled: false,
      type: TYPES.INITIAL.TYPE,
    };
  },

  watch: {
    value() {
      this.$nextTick(() => {
        this.makeInputFilled();
      });
    },
  },

  mounted() {
    this.initTooltip({ message: TYPES.INITIAL.TOOLTIP });
    this.makeInputFilled();
  },

  destroyed() {
    this.destroyTooltip();
  },

  methods: {
    makeInputFilled() {
      this.isFilled = this.$refs.input.value.length != 0;
    },

    toggleType() {
      if (this.isTypeToggled) {
        this.isTypeToggled = false;
        this.initTooltip({ message: TYPES.PASSWORD.TOOLTIP });
        this.type = TYPES.PASSWORD.TYPE;

        return;
      }

      this.isTypeToggled = true;
      this.initTooltip({ message: TYPES.TEXT.TOOLTIP });
      this.type = TYPES.TEXT.TYPE;
    },

    initTooltip(params) {
      this.destroyTooltip();

      let { message } = params;

      if (!message) message = 'Toggle Password';

      this.tooltip = tippy(this.$refs.tooltip, {
        content: message,
        animateFill: true,
        theme: 'material',
        plugins: [animateFill],
        offset: [0, 4],
        interactive: false,
        allowHTML: true,
        placement: 'bottom',
        maxWidth: 350,
      });
    },

    destroyTooltip() {
      if (!this.tooltip) {
        return;
      }

      this.tooltip.destroy();
      this.tooltip = null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Input';
</style>
