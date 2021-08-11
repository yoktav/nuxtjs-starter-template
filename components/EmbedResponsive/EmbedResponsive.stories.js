import Component from './EmbedResponsive';

export default {
  title: 'Components/EmbedResponsive',
  component: Component,
  argTypes: {
    ratio: {
      control: {
        type: 'select',
        options: ['16by9'],
      },
    },
    src: {
      control: 'text',
      defaultValue:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200066.14126992284!2d26.939632682751274!3d38.417591675945715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1593705181806!5m2!1str!2str',
    },
  },
};

export const Template = (arg, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<EmbedResponsive
    :ratio="$props.ratio"
    :src="$props.src"
  />`,
});
