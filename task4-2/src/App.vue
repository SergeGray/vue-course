<template>
  <div id="app" class="container">
    <component v-if="currentQuestion"
               :is="templateType(currentQuestion)"
               :answers="currentQuestion.answers"
               :title="currentQuestion.title"
               @form-submit="submitQuestion">
    </component>
    <test-results :answeredQuestions="answeredQuestions" v-else>
    </test-results>
  </div>
</template>

<script>
import MultipleAnswersQuestion from './components/MultipleAnswersQuestion.vue'
import SingleAnswerQuestion from './components/SingleAnswerQuestion.vue'
import TestResults from './components/TestResults.vue'


export default {
  name: 'app',
  components: {
    MultipleAnswersQuestion,
    SingleAnswerQuestion,
    TestResults
  },
  data () {
    return {
      currentQuestionIndex: 0,
      answeredQuestions: []
    }
  },
  computed: {
    currentQuestion() {
      return this.getQuestions()[this.currentQuestionIndex];
    }
  },
  methods: {
    getQuestions() {
      return [
        {
          type: 'radio',
          title: 'Какой тег задаёт ссылку?',
          answers: [
            'a',
            'div',
            'span',
            'img'
          ]
        },
        {
          type: 'checkbox',
          title: 'Какие из  этих тегов строчные?',
          answers: [
            'a',
            'div',
            'span',
            'img'
          ]
        }
      ];
    },
    templateType(question) {
      if (question.type == 'checkbox') {
        return 'MultipleAnswersQuestion';
      } else if (question.type == 'radio') {
        return 'SingleAnswerQuestion';
      }
    },
    submitQuestion(answer) {
      this.answeredQuestions.push({
        title: this.currentQuestion.title,
        answer: answer
      });
      this.currentQuestionIndex++;
    }
  }
}
</script>

<style>
</style>
