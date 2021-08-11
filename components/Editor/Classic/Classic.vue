<template>
  <ckeditor
    :editor="editor"
    :value="value"
    :config="config"
    :tag-name="tagName"
    :disabled="disabled"
    @input="event => $emit('input', event)"
  />
</template>

<script>
let ClassicEditor;
let CKEditor;

// Since ckeditor is not supporting ssr, we should import like this
if (process.client) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
  CKEditor = require('@ckeditor/ckeditor5-vue2');
} else {
  CKEditor = { component: { template: '<div></div>' } };
}

export default {
  components: {
    ckeditor: CKEditor.component,
  },

  props: {
    value: {
      type: String,
      default: '',
    },
    tagName: {
      type: String,
      default: 'div',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    uploadUrl: {
      type: String,
      default: '',
    },
    config: {
      type: Object,
      required: false,
      default: () => {},
    },
  },

  data() {
    return {
      editor: ClassicEditor,
    };
  },
};
</script>
