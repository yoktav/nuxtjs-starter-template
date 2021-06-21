<template>
  <ValidationObserver ref="veeForm" tag="div">
    <form @submit.prevent>
      <ValidationProvider v-slot="{ errors }" name="Select" rules="required" tag="div">
        <v-select
          v-model="selected"
          :class="errors.length > 0 ? 'is-invalid' : null"
          :options="['foo', 'bar', 'baz']"
        />
        <div class="u-color-danger">{{ errors[0] }}</div>
      </ValidationProvider>

      <br /><br />

      <ValidationProvider v-slot="{ errors }" name="Input" rules="required" tag="div">
        <Input
          :id="24"
          v-model="InputVModel"
          :is-invalid="errors.length > 0"
          tag="input"
          input-element="input"
          input-type="text"
          :has-label-text="true"
          :label-text="'Custom label'"
          placeholder="Custom Placeholder"
        />
        <div class="u-color-danger">{{ errors[0] }}</div>
      </ValidationProvider>

      <button type="submit" @click="validationForm">Submit</button>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  data() {
    return {
      selected: '',
      InputVModel: '',
    };
  },
  methods: {
    validationForm() {
      this.$refs.veeForm.validate().then(success => {
        if (success) {
          console.log('selected', this.selected);
          console.log('inputValue', this.InputVModel);
        }
      });
    },
  },
};
</script>
