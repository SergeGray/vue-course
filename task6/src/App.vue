<template>
  <div
    id="app"
    class="container"
  >
      <form
        @submit.prevent="submitForm"
        v-if="!submitted"
      >
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuemin="0"
            aria-valuemax="100"
            :aria-valuenow="currentProgress"
            :style="currentStyle"
          >
          </div>
        </div>
        <app-input
          v-for="(_, index) in fields"
          :key="index"
          :index="index"
        >
        </app-input>
        
        <button class="btn btn-primary">Send Data</button>
      </form>
      <div v-else>
        <h2>Hello, {{ name }}</h2>
        <hr>
        <table class="table table-bordered">
          <tbody>
            <tr
              v-for="(field, index) in fields"
              :key="index"
            >
              <td>{{ field.title }}</td>
              <td>{{ field.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>
  import AppInput from './components/InputTextValidation';
  import { mapGetters } from 'vuex';

  export default {
    name: 'app',
    components: {
      AppInput
    },
    data () {
      return {
        submitted: false,
        fieldsTotal: 100
      }
    },
    methods: {
      submitForm() {
        if (this.currentProgress === this.fieldsTotal) {
          this.submitted = true;
        }
      }
    },
    computed: {
      ...mapGetters([
        'fields',
        'name'
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
        return `width: ${this.currentProgress}%;`;
      },
      fieldProgress() {
        return Math.floor(this.fieldsTotal / this.fields.length)
      }
    }
  };
</script>

<style>
</style>
