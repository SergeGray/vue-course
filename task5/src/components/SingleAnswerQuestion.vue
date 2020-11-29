<template>
  <form @submit.prevent="submitAnswer">
    <h2>
      {{ title }}
    </h2>

    <div
      class="form-group"
      v-for="(answer, index) in answers"
      :key="index"
    >
      <input
        type="radio"
        :id="`answer-${index}`"
        :value="index"
        v-model="selectedAnswer"
        @change="answered = true"
      >
      <label :for="`answer-${index}`">{{ answer }}</label>
    </div>

    <button
      class="btn btn-primary"
      :disabled="!answered"
    >
      Send Data
    </button>
  </form>
</template>

<script>
  export default {
    props: {
      title: String,
      answers: Array
    },
    data() {
      return {
        selectedAnswer: null,
        answered: false
      };
    },
    methods: {
      submitAnswer() {
        this.$emit('form-submit', this.selectedAnswer);
        this.selectedAnswer = null;
        this.answered = false;
      }
    }
  }
</script>
