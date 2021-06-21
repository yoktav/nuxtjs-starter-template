import Component from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Component,
  argTypes: {},
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<Navbar    />',
});
