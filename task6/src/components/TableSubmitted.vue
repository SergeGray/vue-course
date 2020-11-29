<template>
  <div>
    <h2>Hello, {{ name }}</h2>
    <hr>
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(field, index) in fields" :key="index">
          <td>{{ field.title }}</td>
          <td>{{ field.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fields',
      'name'
    ])
  }
}
</script>

<style scoped>
</style>
