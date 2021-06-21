<template>
  <label
    :class="[
      'c-input',
      isValid ? 'is-valid' : null,
      isInvalid ? 'is-invalid' : null,
      isWarning ? 'is-warning' : null,
    ]"
  >
    <div v-if="hasLabelText" class="c-input__text">{{ labelText }}</div>

    <component
      :is="tag"
      :id="id ? `input-${id}` : false"
      ref="input"
      :type="inputType"
      :class="['c-input__control', inputElement === `input` ? null : 'c-input__control--textarea']"
      :maxlength="maxlength ? maxlength : false"
      :name="name ? name : false"
      :value="value ? value : false"
      :placeholder="placeholder ? placeholder : false"
      :disabled="isDisabled"
      :readonly="isReadonly"
      @change="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'input',
      required: true,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputElement: {
      type: String,
      default: 'input',
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
    };
  },

  watch: {
    value: {
      handler() {
        this.$refs.input.value = this.value;
      },
    },
  },
};
</script>

<style lang="scss">
@import './Input';
</style>
