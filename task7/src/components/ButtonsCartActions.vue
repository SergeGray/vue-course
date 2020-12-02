<template>
  <div>
    <button
      v-show="!cartItemById(product.id)"
      class="btn btn-primary"
      @click="addToCart(product)"
    >
      Add to cart
    </button>
    <button
      v-show="cartItemById(product.id)"
      class="btn btn-warning"
      @click="removeFromCart(product)"
    >
      Remove from cart
    </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    props: {
      product: Object
    },
    computed: {
      ...mapGetters('cart', {
        cartItemById: 'itemById'
      })
    },
    methods: {
      ...mapActions('cart', {
        addToCart: 'addItem',
        removeFromCart: 'removeItem'
      })
    }
  };
</script>

<style scoped>
</style>
