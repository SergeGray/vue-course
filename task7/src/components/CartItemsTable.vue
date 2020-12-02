<template>

<table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th>Title</th>
      <th>Price</th>
      <th>Amount</th>
      <th>Total Price</th>
      <th v-if="!checkedOut"></th>
    </tr>
  </thead>

  <cart-items-body :checkedOut="checkedOut" />
</table>

</template>

<script>
  import CartItemsBody from './CartItemsBody';

  export default {
    components: {
      CartItemsBody
    },
    props: {
      checkedOut: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<style scoped>
</style>
