<template>
  <div class="form-group">
    <label :for="title">{{ title }}</label>
    <span
      v-show="valid !== null"
      class="fas"
      :class="valid ? 'fa-check' : 'fa-exclamation'">
    </span>
    <input
      type="text"
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
        return this.$store.getters.titleByIndex(this.index);
      },
      value() {
        return this.$store.getters.valueByIndex(this.index);
      },
      valid() {
        return this.$store.getters.validByIndex(this.index);
      },
    },
    methods: {
      ...mapActions([
        'updateValue'
      ]),
      onChange(event) {
        this.updateValue({
          index: this.index,
          value: event.target.value
        });
      }
    }
  }
</script>

<style scoped>
  .fa-exclamation {
    color: red;
  }
  .fa-check {
    color: green;
  }
</style>
