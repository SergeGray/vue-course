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

  <tbody>
    <cart-item-details
      v-for="(item, index) in items"
      :key="index"
      :checkedOut="checkedOut"
      :item="item"
    />

    <tr>
      <td colspan="3"></td>
      <td>{{ totalPrice }}</td>
      <td v-if="!checkedOut"></td>
    </tr>
  </tbody>
</table>

</template>

<script>
import { mapGetters } from 'vuex';

import CartItemDetails from './CartItemDetails';

export default {
  components: {
    CartItemDetails
  },
  props: {
    checkedOut: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('cart', [
      'items'
    ]),
    ...mapGetters('products', [
      'productById'
    ]),
    totalPrice() {
      return this.items.reduce((total, item) => {
        return total += item.count * this.productById(item.id).price;
      }, 0);
    }
  }
};
</script>

<style scoped>
</style>
