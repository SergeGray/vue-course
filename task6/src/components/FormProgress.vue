<template>
  <form @submit.prevent="submitForm">
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-valuenow="currentProgress"
        :style="currentStyle"
      ></div>
    </div>
    <app-input
      v-for="(_, index) in fields"
      :key="index"
      :index="index"
    ></app-input>

    <button
      class="btn btn-primary"
      :disabled="!completed"
    >Send Data</button>
  </form>
</template>

<script>
import AppInput from './InputTextValidation';
import { mapGetters } from "vuex";

export default {
  components: {
    AppInput
  },
  data() {
    return {
      maxProgress: 100
    };
  },
  computed: {
    ...mapGetters([
      "fields"
    ]),
    currentProgress() {
      return this.fields.reduce((total, current) => {
        if (current.valid) {
          total += this.fieldProgress;
        }
        return total;
      }, 0);
    },
    currentStyle() {
      return {
        width: `${this.currentProgress}%`
      };
    },
    fieldProgress() {
      return Math.floor(this.maxProgress / this.fields.length);
    },
    completed() {
      return this.currentProgress === this.maxProgress;
    }
  },
  methods: {
    submitForm() {
      if (this.completed) {
        this.$emit('form-submit');
      }
    }
  }
};
</script>

<style scoped>
</style>
