import Component from './RadioButton';

export default {
  title: 'Form/RadioButton',
  component: Component,
  argTypes: {},
};

export const Input = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<RadioButton
    :id="24"
    :name="$props.name"
    :isDisabled="$props.isDisabled"
    :isValid="$props.isValid"
    :isInvalid="$props.isInvalid"
    :isWarning="$props.isWarning"
  >
  Lorem Ipsum
  </RadioButton>`,
});
