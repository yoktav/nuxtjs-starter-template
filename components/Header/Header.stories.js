import Component from './Header';

export default {
  title: 'Components/Header',
  component: Component,
  argTypes: {},
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Header   />',
});
