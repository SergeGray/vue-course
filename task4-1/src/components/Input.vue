<template>
  <div class="form-group">
    <label>{{ field.title }}</label>
    <span v-show="'valid' in field"
          class="fas"
          :class="field.valid ? 'fa-check' : 'fa-exclamation'">
    </span>
    <input type="text"
           class="form-control"
           v-model.lazy="field.value"
           @change="$emit('field-update')">
  </div>
</template>

<script>
  export default {
    props: {
      field: Object
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
