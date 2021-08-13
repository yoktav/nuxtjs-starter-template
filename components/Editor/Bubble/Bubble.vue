<template>
  <div ref="editor"></div>
</template>

<script>
//
// NOTICE: Don't forget to wrap with client-only tag when usign
//
// Example
//
// <client-only>
//   <EditorBubble v-model="content" />
// </client-only>
//

import BalloonEditor from './build/ckeditor';

export default {
  props: {
    placeholder: {
      type: String,
      default: 'Write something...',
    },
    value: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      observer: new MutationObserver(() => {
        this.handleChange();
      }),
    };
  },

  mounted() {
    this.initEditor();

    this.$refs.editor.innerHTML = this.value;
  },

  beforeDestroy() {
    this.destroyEditor();
  },

  methods: {
    initEditor() {
      BalloonEditor.create(this.$refs.editor, {
        placeholder: this.placeholder,

        toolbar: {
          items: [
            'heading',
            '|',
            'bold',
            'italic',
            'link',
            'blockQuote',
            '|',
            'fontSize',
            'alignment',
            'underline',
            'strikethrough',
            'superscript',
            'subscript',
            'outdent',
            'indent',
            '|',
            'highlight',
            'fontColor',
            '|',
            'horizontalLine',
            'redo',
            'undo',
            '|',
            'removeFormat',
          ],
        },

        fontSize: {
          options: [10, 12, 14, 'default', 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60],
          supportAllValues: true,
        },

        fontColor: {
          colors: [
            {
              color: '#1e2fb5',
              label: 'Primary',
            },
            {
              color: '#ff0024',
              label: 'Danger',
            },
            {
              color: '#ff9800',
              label: 'Warning',
            },
            {
              color: '#8bc34a',
              label: 'Success',
            },
            {
              color: '#009688',
              label: 'Info',
            },
          ],
        },

        heading: {
          options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
            { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
            { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
          ],
        },

        licenseKey: '',
      })
        .then(editor => {
          window.editor = editor;
        })
        .catch(error => {
          console.error('An error occurred with the editor!');
          console.error(error);
        });

      this.observer.observe(this.$refs.editor, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
        attributeOldValue: true,
        characterDataOldValue: true,
      });
    },

    handleChange() {
      let html = this.$refs.editor.innerHTML;
      html = html.replace(`data-placeholder="${this.placeholder}"`, ''); // removeDataPlaceholder
      this.$emit('input', html);
    },

    destroyEditor() {
      this.observer.disconnect();
    },
  },
};
</script>

<style lang="scss">
// Do not use it in scoped due to editor styles
@import './Bubble';
</style>
