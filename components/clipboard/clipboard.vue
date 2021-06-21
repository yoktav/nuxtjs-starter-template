<template>
  <div>
    <div ref="copyThis">This is a example component for copyTextWithToast !</div>
    <button type="button" @click="copy">Copy!</button>
  </div>
</template>

<script>
export default {
  methods: {
    copy() {
      this.$copyTextWithToast({ text: this.$refs.copyThis.innerText });
    },
  },
};
</script>
