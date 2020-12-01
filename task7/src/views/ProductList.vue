<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div
        class="col col-sm-4"
        v-for="(product, index) in products"
        :key="index"
      >
        <h3>{{ product.title }}</h3>
        <div>{{ product.price }}</div>
        <button
          v-show="!cartProduct(product.id)"
          class="btn btn-primary"
          @click="AddToCart(product)"
        >Add to cart</button>
        <button
          v-show="cartProduct(product.id)"
          class="btn btn-warning"
          @click="RemoveFromCart(product)"
        >Remove from cart</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters('products', {
        products: 'items'
      }),
      ...mapGetters('cart', {
        cartProduct: 'productById'
      })
    },
    methods: {
      ...mapActions('cart', {
        AddToCart: 'addProduct',
        RemoveFromCart: 'removeProduct'
      })
    }
  };
</script>

<style scoped>
</style>
