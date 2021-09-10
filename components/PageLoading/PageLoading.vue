<template>
  <transition name="fade">
    <div v-if="loading" class="c-page-loading">
      <div class="u-margin-top-xlarge">{{ loadingText }}</div>
    </div>
  </transition>
</template>

<script>
import { LOADING_SCREEN_MIN_DURATION } from '~/constants/generic';

export default {
  data() {
    return {
      loadingText: 'Loading...',
      loading: true,
      startTime: null,
      finishTime: null,
      isInitialLoading: true,

      PAGE_FAST_LOAD_WAITING_THRESHOLD: 100, // Avarage finishTime for faster loading is 100.
    };
  },

  methods: {
    start(params) {
      this.startTime = Date.now();

      if (params !== undefined) {
        const { text, isForceLoading } = params;

        if (text) {
          this.loadingText = text;
        }

        if (isForceLoading) {
          this.loading = true;
        }
      } else {
        if (this.isInitialLoading) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      }

      this.isInitialLoading = false;
    },

    finish() {
      this.finishTime = Date.now() - this.startTime;

      if (this.finishTime < this.PAGE_FAST_LOAD_WAITING_THRESHOLD) {
        setTimeout(() => {
          this.loading = false;
        }, LOADING_SCREEN_MIN_DURATION);
      } else {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import './PageLoading';
</style>
