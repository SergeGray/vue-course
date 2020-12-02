<template>

<div>
  <form @submit.prevent="submitForm">
  <div class="progress">
    <div
      class="progress-bar"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="currentProgress"
      :style="currentStyle"
    />
  </div>

  <field-input
    v-for="(_, index) in fields"
    :key="index"
    :index="index"
  />

  <button
    class="btn btn-primary"
    :disabled="!completed"
  >
    Send Data
  </button>
  </form>
</div>

</template>

<script>
  import { mapGetters } from 'vuex';
  
  import FieldInput from '../components/InputFieldValidation';

  export default {
    components: {
      FieldInput
    },
    data() {
      return {
        maxProgress: 100
      };
    },
    computed: {
      ...mapGetters('checkout', [
        'fields'
      ]),
      ...mapGetters('cart', [
        'totalCount'
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
        return {
          width: `${this.currentProgress}%`
        };
      },
      fieldProgress() {
        return Math.floor(this.maxProgress / this.fields.length);
      },
      completed() {
        let formFilled = this.currentProgress === this.maxProgress;
        return formFilled && this.totalCount > 0;
      }
    },
    methods: {
      submitForm() {
        if (this.completed) {
          this.$router.push('/payment');
        }
      }
    }
  };
</script>

<style scoped>
</style>
