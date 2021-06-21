import Component from './ToggleSwitch';

export default {
  title: 'Components/ToggleSwitch',
  component: Component,
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<ToggleSwitch
      :modifier-class="$props.modifierClass"
      :isActive="$props.isActive"
      :hasText="$props.hasText"
      :primaryText="$props.primaryText"
      :secondaryText="$props.secondaryText"
    />`,
});
