export default {
  title: 'Components/clipboard',
  argTypes: {},
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <clipboard />
  </div>`,
});
