<template>
  <form @submit.prevent="submitAnswer">
    <h2>
      {{ title }}
    </h2>

    <div class="form-group"
         v-for="(answer, index) in answers"
         :key="`answer-${index}`">
      <input type="checkbox"
             :id="`answer-${index}-checkbox`"
             v-model="selectedAnswers[index]"
             @input="answered = true">
      <label :for="`answer-${index}-checkbox`">{{ answer }}</label>
    </div>

    <button class="btn btn-primary" :disabled="!answered">
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
        selectedAnswers: [],
        answered: false
      };
    },
    created() {
      this.selectedAnswers = this.answers.map(x => false);
    },
    methods: {
      submitAnswer() {
        this.$emit('form-submit', this.selectedAnswers);
        this.selectedAnswers = this.selectedAnswers.map(x => false);
        this.answered = false;
      }
    }
  }
</script>
