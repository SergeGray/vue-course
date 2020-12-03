<template>

<div>
  <h1>Cart</h1>
  <hr>

  <div
    v-if="isEmpty"
    class="alert alert-warning"
  >
    Your cart is empty
  </div>

  <div v-else>
    <cart-items-table :checkedOut="false" />

    <button
      class="btn btn-success"
      @click="onOrder"
    >
      Order Now
    </button>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
  
import CartItemsTable from '../components/CartItemsTable';

export default {
  components: {
    CartItemsTable
  },
  computed: {
    ...mapGetters('cart', [
      'items'
    ]),
    isEmpty() {
      return this.items.length === 0;
    }
  },
  methods: {
    onOrder() {
      this.$router.push('/checkout');
    }
  }
};
</script>

<style scoped>
</style>
