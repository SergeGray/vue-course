<template>
  <div>
    <h1>Products</h1>
    <div class="row">
      <div
        class="col col-sm-4"
        v-for="(product, index) in products"
        :key="index"
      >
        <router-link
          tag="h3"
          :to="`/products/${product.id}`">
          <a>{{ product.title }}</a>
        </router-link>
        <div>{{ product.price }}</div>
        <buttons-cart-actions :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ButtonsCartActions from '../components/ButtonsCartActions';

  export default {
    components: {
      ButtonsCartActions
    },
    computed: {
      ...mapGetters('products', {
        products: 'products'
      })
    }
  };
</script>

<style scoped>
</style>
