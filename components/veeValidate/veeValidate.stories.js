import Component from './veeValidate';

export default {
  title: 'Form/veeValidate',
  component: Component,
  argTypes: {},
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <veeValidate />
  </div>`,
});
