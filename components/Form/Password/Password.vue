<template>
  <label
    :class="[
      'c-input',
      isValid ? 'is-valid' : null,
      isInvalid ? 'is-invalid' : null,
      isWarning ? 'is-warning' : null,
      isTypeToggled ? 'is-type-toggled' : null,
    ]"
  >
    <div v-if="hasLabelText" class="c-input__text">{{ labelText }}</div>

    <component
      :is="tag"
      :id="id ? `input-${id}` : false"
      ref="input"
      :type="type"
      class="c-input__control c-input__control--toggle-type"
      :maxlength="maxlength ? maxlength : false"
      :name="name ? name : false"
      :value="value ? value : false"
      :placeholder="placeholder ? placeholder : false"
      :disabled="isDisabled"
      :readonly="isReadonly"
      @change="$emit('input', $event.target.value)"
    />

    <button ref="tooltip" class="c-input__toggle-type" @click="toggleType">
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

const TYPES = {
  INITIAL: {
    TYPE: 'password',
    TOOLTIP: 'Şifreyi Görüntüle',
  },
  PASSWORD: {
    TYPE: 'password',
    TOOLTIP: 'Şifreyi Görüntüle',
  },
  TEXT: {
    TYPE: 'text',
    TOOLTIP: 'Şifreyi Gizle',
  },
};

export default {
  props: {
    tag: {
      type: String,
      default: 'input',
      required: true,
    },
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    hasLabelText: {
      type: Boolean,
      default: false,
    },
    labelText: {
      type: String,
      default: null,
    },
    maxlength: {
      type: String,
      default: null,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
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
      FILLED_CLASS: 'is-filled',

      tooltip: null,
      isTypeToggled: false,
      type: TYPES.INITIAL.TYPE,
    };
  },

  watch: {
    value: {
      handler() {
        this.$refs.input.value = this.value;
      },
    },
  },

  mounted() {
    this.initTooltip({ message: TYPES.INITIAL.TOOLTIP });
  },

  destroyed() {
    this.destroyTooltip();
  },

  methods: {
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

      if (!params.message) params.message = 'Şifre Göster/Gizle';

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
