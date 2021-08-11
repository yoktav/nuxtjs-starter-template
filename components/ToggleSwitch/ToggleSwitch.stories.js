import Component from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: Component,
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<ToggleSwitch
      v-model="model"
      :hasText="$props.hasText"
      :primaryText="$props.primaryText"
      :secondaryText="$props.secondaryText"
    />`,
});
