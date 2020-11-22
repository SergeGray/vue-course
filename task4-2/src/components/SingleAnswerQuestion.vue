<template>
  <form @submit.prevent="$emit('form-submit', selectedAnswer)">
    <h2>
      {{ title }}
    </h2>

    <div class="form-group" v-for="(answer, index) in answers">
      <input type="radio"
             :id="`answer-$(index)`"
             :value="index"
             v-model="selectedAnswer"
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
        selectedAnswer: null,
        answered: false
      }
    }
  }
</script>
