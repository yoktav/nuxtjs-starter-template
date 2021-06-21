export default {
  title: 'Components/DatePicker',
  argTypes: {},
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <DatePicker />
  </div>`,
});
