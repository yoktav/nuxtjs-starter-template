export default {
  title: 'Components/fileUpload',
  argTypes: {},
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<div>
    <FileUpload />
  </div>`,
});
