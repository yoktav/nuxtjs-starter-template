import Component from './Input';

export default {
  title: 'Form/Input',
  component: Component,
  argTypes: {
    labelText: {
      control: 'text',
      defaultValue: 'This is a label',
    },
  },
};

export const Input = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Input
    :tag="'input'"
    :inputType="'text'"
    :id="24"
    :name="$props.name"
    :placeholder="$props.placeholder"
    :hasLabelText="true"
    :labelText="$props.labelText"
    :isDisabled="$props.isDisabled"
    :isValid="$props.isValid"
    :isInvalid="$props.isInvalid"
    :isWarning="$props.isWarning"
  />`,
});

export const Textarea = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<Input
    :tag="'textarea'"
    :id="24"
    :name="$props.name"
    :placeholder="$props.placeholder"
    :hasLabelText="true"
    :labelText="$props.labelText"
    :isDisabled="$props.isDisabled"
    :isValid="$props.isValid"
    :isInvalid="$props.isInvalid"
    :isWarning="$props.isWarning"
  />`,
});
