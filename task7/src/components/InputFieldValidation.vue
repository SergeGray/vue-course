<template>
  <div class="form-group">
    <label :for="title">{{ title }}</label>
    <span
      v-show="valid !== null"
      class="fas"
      :class="valid ? 'fa-check' : 'fa-exclamation'">
    </span>
    <input
      :type="inputType"
      class="form-control"
      :id="title"
      :value="value"
      @change="onChange"
    >
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: {
      index: Number
    },
    computed: {
      title() {
        return this.$store.getters['checkout/titleByIndex'](this.index);
      },
      value() {
        return this.$store.getters['checkout/valueByIndex'](this.index);
      },
      valid() {
        return this.$store.getters['checkout/validByIndex'](this.index);
      },
      inputType() {
        return this.$store.getters['checkout/inputTypeByIndex'](this.index);
      }
    },
    methods: {
      ...mapActions('checkout', {
        updateValue: 'updateValue'
      }),
      onChange(event) {
        this.updateValue({
          fieldIndex: this.index,
          fieldValue: event.target.value
        });
      }
    }
  };
</script>

<style scoped>
  .fa-exclamation {
    color: red;
  }
  .fa-check {
    color: green;
  }
</style>
