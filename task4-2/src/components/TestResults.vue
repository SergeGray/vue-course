<template>
  <div>
    <h2>Итого</h2>
    <hr>

    <table class="table table-bordered">
      <tr>
        <th>
          <strong>Вопрос</strong>
        </th>
        <th>
          <strong>Ваш ответ</strong>
        </th>
      </tr>

      <tr v-for="(question, index) in answeredQuestions"
          :key="index">
        <td>
          {{ question.title }}
        </td>
        <td>
          {{ question.answer }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      answeredQuestions: Array
    }
  }
</script>
