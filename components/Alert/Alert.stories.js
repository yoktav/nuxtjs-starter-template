import Component from './Alert';

export default {
  title: 'Components/Alert',
  component: Component,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['info', 'gray', 'warning', 'success', 'danger'],
      },
    },
    text: {
      control: 'text',
      defaultValue: 'You are almost ready to start',
    },
  },
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Alert
      :theme="$props.theme"
      :hasIcon="$props.hasIcon"
      :iconName="'IconBell'"
      :iconTitle="'GLOBAL.WARNING'"
      :isClosable="$props.isClosable"
    >
      {{ $props.text }} <a href="#!">Lorem ipsum dolor sit amet.</a>
    </Alert>`,
});
