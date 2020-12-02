<template>

<div>
  <h1>Products</h1>

  <router-view />

  <div class="row">
    <div
      class="col col-sm-4"
      v-for="(product, index) in products"
      :key="index"
    >
      <router-link
        tag="h3"
        :to="`/products/${product.id}`"
      >
        <a>{{ product.title }}</a>
      </router-link>

      <div>{{ product.price }}</div>

      <div>
        <button-cart-actions
          :product="product"
        />
      </div>
    </div>
  </div>
</div>

</template>

<script>
  import { mapGetters } from 'vuex';

  import ButtonCartActions from '../components/ButtonCartActions';

  export default {
    components: {
      ButtonCartActions
    },
    computed: {
      ...mapGetters('products', [
        'products'
      ])
    }
  };
</script>

<style scoped>
</style>
