<template>
  <div id="app" class="container">
      <form @submit.prevent="submitForm"
            v-if="!submitted">
        <div class="progress">
          <div class="progress-bar"
               role="progressbar"
               aria-valuemin="0"
               aria-valuemax="100"
               :aria-valuenow="currentProgress"
               :style="currentStyle"></div>
        </div>
        <app-input v-for="(field, index) in fields"
                   :key="index"
                   :field="field"
                   @field-update="validateField(field)">
        </app-input>
        
        <button class="btn btn-primary">Send Data</button>
      </form>

      <table class="table table-bordered" v-if="submitted">
        <tr v-for="field in fields">
          <td>{{ field.title }}</td>
          <td>{{ field.value }}</td>
        </tr>
      </table>
  </div>
</template>

<script>
  import AppInput from './components/Input.vue';

  export default {
    name: 'app',
    components: {
      AppInput
    },
    data () {
      return {
        submitted: false,
        fieldsTotal: 100,
        fields: [
          {
            title: 'Name',
            value: '',
            validationPattern: /^[a-z]{2,30}$/i
          },
          {
            title: 'Phone',
            value: '',
            validationPattern: /^\d{7,14}$/
          },
          {
            title: 'Email',
            value: '',
            validationPattern: /^[a-z\d]{1,20}@[a-z\d]{1,20}\.[a-z]{1,6}$/i
          },
          {
            title: 'Some Field 1',
            value: '',
            validationPattern: /.+/
          },
          {
            title: 'Some Field 2',
            value: '',
            validationPattern: /.+/
          },
        ]
      }
    },
    methods: {
      submitForm() {
        if (this.currentProgress === this.fieldsTotal) {
          this.submitted = true;
        }
      },
      validateField(field) {
        this.$set(field, 'valid', field.validationPattern.test(field.value));
      }
    },
    computed: {
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
