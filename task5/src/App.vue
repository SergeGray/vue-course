<template>
  <div id="app" class="container">
    <transition name="fade">
      <component v-if="currentQuestion"
                 :is="templateType(currentQuestion)"
                 :answers="currentQuestion.answers"
                 :title="currentQuestion.title"
                 @form-submit="submitQuestion">
      </component>

      <test-results :answeredQuestions="answeredQuestions" v-else>
      </test-results>
    </transition>
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
    };
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
    copyAnswer(answer) {
      if (Array.isArray(answer)) {
        return Array.from(answer);
      } else {
        return answer;
      }
    },
    submitQuestion(answer) {
      this.answeredQuestions.push({
        title: this.currentQuestion.title,
        answer: this.copyAnswer(answer)
      });
      this.currentQuestionIndex++;
    }
  }
}
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 0.5s; 
  }

  .fade-leave {
    position: absolute;
  }

  .fade-leave-active {
    transition: opacity 0.5s;
  }

  .fade-leave-to {
    opacity: 0;
    position: absolute;
  }
</style>
