import Component from './Tooltip';

export default {
  title: 'Components/Tooltip',
  component: Component,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['', 'material', 'light'],
      },
      defaultValue: 'material',
    },
    placement: {
      control: {
        type: 'select',
        options: [
          'top',
          'top-start',
          'top-end',
          'right',
          'right-start',
          'right-end',
          'bottom',
          'bottom-start',
          'bottom-end',
          'left',
          'left-start',
          'left-end',
          'auto',
          'auto-start',
          'auto-end',
        ],
      },
      defaultValue: 'bottom',
    },
  },
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Tooltip
      :content="$props.content"
      :theme="$props.theme"
      :placement="$props.placement"
      :animateFill="$props.animateFill"
      :interactive="$props.interactive"
      :maxWidth="$props.maxWidth"
      :hideOnMobile="$props.hideOnMobile"
    >
      Hover me!
    </Tooltip>`,
});
