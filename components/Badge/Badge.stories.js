import Component from './Badge';

export default {
  title: 'Components/Badge',
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
      defaultValue: 'Badge',
    },
  },
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Badge
      :theme="$props.theme"
    >
      {{ $props.text }}
    </Badge>`,
});
