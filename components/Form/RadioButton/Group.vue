<template>
  <div class="row">
    <slot name="prepend" />

    <div v-for="option in options" :key="forLoopKey(option)" :class="['col', columnClass, 'u-margin-bottom']">
      <FormRadioButton v-model="elementData" :data="option" :name="random" :is-category="isCategory">
        <slot :data="option"> {{ option }} </slot>
      </FormRadioButton>
    </div>

    <slot name="append" />
  </div>
</template>

<script>
import { PROP_TYPE_ARRAY, PROP_TYPE_BOOLEAN, PROP_TYPE_OBJECT_STRING, PROP_TYPE_STRING } from '~/constants/props';
import { randomKey } from '~/utils/randomKey';

export default {
  props: {
    options: {
      type: PROP_TYPE_ARRAY,
      required: true,
    },
    value: {
      type: PROP_TYPE_OBJECT_STRING,
      default: '',
    },
    objectKey: {
      default: 'text',
      type: PROP_TYPE_STRING,
    },
    columnClass: {
      type: PROP_TYPE_STRING,
      required: false,
      default: 'col--lg-3',
    },
    isCategory: {
      type: PROP_TYPE_BOOLEAN,
      default: false,
    },
  },

  data() {
    return {
      elementData: {},
      random: randomKey(),
    };
  },

  watch: {
    value() {
      this.elementData = this.value;
    },

    elementData() {
      if (!this.elementData) return;

      this.$emit('input', this.elementData);
    },
  },

  mounted() {
    this.elementData = this.value;
  },

  methods: {
    randomKey,
  },
};
</script>
