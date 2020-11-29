<template>
  <div
    id="app"
    class="container"
  >
    <form-progress
      v-if="!submitted"
      @form-submit="submitted = true"
    ></form-progress>
    <table-submitted v-else></table-submitted>
  </div>
</template>

<script>
  import FormProgress from './components/FormProgress';
  import TableSubmitted from './components/TableSubmitted';

  export default {
    name: 'app',
    components: {
      FormProgress,
      TableSubmitted
    },
    data () {
      return {
        submitted: false
      }
    }
  };
</script>

<style scoped>
</style>
