<template>
  <form @submit.prevent="$emit('form-submit', selectedAnswers)">
    <h2>
      {{ title }}
    </h2>

    <div class="form-group" v-for="(answer, index) in answers">
      <input type="checkbox"
             :id="`answer-$(index)`"
             v-model="selectedAnswers[index]"
             @input="answered = true">
      <label for="`answer-$(index)`">{{ answer }}</label>
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
    mounted() {
      this.selectedAnswers = this.answers.map(x => false);
    }
  }
</script>
