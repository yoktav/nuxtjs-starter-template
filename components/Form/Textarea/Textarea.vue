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

    <textarea
      :id="id ? `input-${id}` : false"
      ref="input"
      v-model="textareaValue"
      class="c-input__control c-input__control--textarea"
      :maxlength="maxlength ? maxlength : false"
      :name="name ? name : false"
      :placeholder="placeholder ? placeholder : false"
      :disabled="isDisabled"
      :readonly="isReadonly"
      :rows="rows ? rows : false"
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
    rows: {
      type: String,
      default: '',
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

      textareaValue: '',
    };
  },

  watch: {
    value: {
      handler() {
        this.$emit('input', this.textareaValue);
      },
    },
  },

  mounted() {
    this.textareaValue = this.value;
  },
};
</script>

<style lang="scss" scoped>
@import '../Input';
</style>
