export default {
  title: 'Form/vueSelect',
  argTypes: {
    options: {
      control: 'array',
      defaultValue: ['foo', 'bar', 'baz'],
    },
  },
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    For more options see: <a target="_blank" href="https://vue-select.org/guide/options.html#option-labels">https://vue-select.org/guide/options.html#option-labels</a>
    <br />
    <v-select :options="$props.options"></v-select>
  </div>`,
});
