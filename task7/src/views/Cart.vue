<template>
  <div>
    <h1>Cart</h1>
    <hr>
    <div
      v-if="items.length === 0"
      class="alert alert-warning"
    >
      Your cart is empty
    </div>

    <cart-items v-else />

    <button
      class="btn btn-success"
      @click="onOrder"
    >
      Order Now
    </button>
  </div>
</template>

<script>
  import CartItems from '../components/CartItems';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      CartItems
    },
    computed: {
      ...mapGetters('cart', {
        items: 'items'
      }),
      empty() {
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
