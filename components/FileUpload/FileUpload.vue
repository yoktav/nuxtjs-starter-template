<template>
  <div
    :class="['c-file-upload', file ? 'c-file-upload--uploaded' : null]"
    @dragover="dragOver"
    @drop="drop"
  >
    <label class="c-file-upload__label">
      <input
        ref="file"
        type="file"
        name="fields[assetsFieldHandle][]"
        class="u-display-none"
        accept=".pdf,.jpg,.jpeg,.png"
        @change="fileUploaded"
      />

      <div class="c-file-upload__text">
        <svg-icon name="IconUpload" title="Upload Image" />
        Drag and drop to upload image
      </div>
    </label>

    <div v-if="file" class="c-file-upload__uploaded-file">
      <img ref="uploadedFileRef" src="#" class="c-file-upload__image" />

      <button
        type="button"
        title="Delete File"
        class="c-file-upload__remove-image"
        @click="removeFile()"
      >
        <svg-icon name="IconCross" title="Close" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },

  methods: {
    fileUploaded() {
      this.file = this.$refs.file.files[0];
      const reader = new FileReader();

      this.$nextTick(() => {
        const myImg = this.$refs.uploadedFileRef;

        reader.addEventListener('load', function () {
          console.log(myImg.src);
          myImg.src = this.result;
        });
        reader.readAsDataURL(this.file);

        this.$emit('fileUploaded', this.file);
      });
    },

    removeFile() {
      this.file = null;
      this.$emit('fileUploaded', this.file);
    },

    dragOver(event) {
      event.preventDefault();
    },

    drop(event) {
      event.preventDefault();

      event.dataTransfer.clearData();
      this.$refs.file = event.dataTransfer.files[0];
      this.fileUploaded();
    },
  },
};
</script>

<style lang="scss" scoped>
@import './FileUpload';
</style>
