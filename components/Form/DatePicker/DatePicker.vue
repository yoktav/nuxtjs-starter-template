<template>
  <div
    :class="[
      'c-input',
      { 'is-valid': isValid },
      { 'is-filled': isFilled },
      { 'is-invalid': isInvalid },
      { 'is-warning': isWarning },
      { 'is-readonly': isReadonly },
    ]"
  >
    <v-date-picker v-model="formValue" :mode="mode" is24hr v-bind="attributes" :minute-increment="1" :model-config="modelConfig">
      <template #default="{ inputValue, inputEvents }">
        <input ref="input" :class="['c-input__control', { 'is-disabled': isDisabled }]" :value="inputValue" v-on="inputEvents" />

        <span v-if="hasLabel" class="c-input__label">
          <span>
            <slot />
          </span>
        </span>
      </template>
    </v-date-picker>
  </div>
</template>

<script>
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN, PROP_TYPE_OBJECT, PROP_TYPE_STRING } from '~/constants/props';

export default {
  props: {
    // Initials
    // ------------

    attributes: {
      type: PROP_TYPE_ARRAY,
      default: null,
    },
    value: {
      type: [Date, String, Number],
      default: null,
    },
    mode: {
      type: PROP_TYPE_STRING,
      default: 'dateTime',
    },

    modelConfig: {
      type: PROP_TYPE_OBJECT,
      default: () => {
        return {
          // type: 'string',
          // mask: 'iso',
          timeAdjust: 'now', // HH:mm:ss | now |
        };
      },
    },

    // Configs
    // ------------

    hasLabel: {
      type: PROP_TYPE_BOOLEAN,
      default: true,
    },

    // States
    // ------------

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
    isDisabled: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
    isReadonly: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
  },

  data() {
    return {
      isFilled: false,
      formValue: null,
    };
  },

  watch: {
    value() {
      this.$nextTick(() => {
        this.formValue = this.value;
        this.makeInputFilled();
      });
    },

    formValue() {
      this.$emit('input', this.formValue);
    },
  },

  mounted() {
    this.formValue = this.value;
    this.makeInputFilled();
  },

  methods: {
    makeInputFilled() {
      setTimeout(() => {
        this.isFilled = this.$refs.input.value.length > 0;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Input';
</style>
