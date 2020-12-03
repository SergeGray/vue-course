<template>

<div>
  <h1>{{ product.title }}</h1>

  <router-link :to="{ name: 'products' }">Back to products</router-link>

  <hr>

  <div class="alert alert-success">
    {{ product.price }}
  </div>

  <div>
    <button-cart-actions
      :product="product"
      button-type="add"
    />
    <button-cart-actions
      :product="product"
      button-type="remove"
    />
  </div>
</div>

</template>

<script>
import ButtonCartActions from '../components/ButtonCartActions';

export default {
  components: {
    ButtonCartActions
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.getters['products/productById'](this.id);
    },
  },
};
</script>
