import Component from './Button';

export default {
  title: 'Components/Button',
  component: Component,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'ghost', 'success'],
      },
    },
    tag: {
      control: {
        type: 'select',
        options: ['a', 'button', 'div'],
      },
    },
    text: {
      control: 'text',
      defaultValue: 'Action',
    },
  },
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Button
      :isSmall="$props.isSmall"
      :isCircle="$props.isCircle"
      :theme="$props.theme"
      :tag="$props.tag"
      :href="$props.href"
      :type="$props.type"
    >
    <svg-icon name="IconBell" title="Icon Bell" /> {{ $props.text }}
    </Button>`,
});
