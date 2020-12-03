<template>

<button
  class="btn"
  :class="buttonClass"
  @click="callButtonAction()"
>
  {{ buttonCaption }}
</button>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      buttonClass: '',
      buttonCaption: '',
      buttonAction: () => undefined
    }
  },
  created() {
    this.assignButtonProperties();
  },
  computed: {
    ...mapGetters('cart', [
      'itemById'
    ]),
    productInCart() {
      return this.itemById(this.product.id) !== undefined;
    }
  },
  methods: {
    ...mapActions('cart', {
      addToCart: 'addItem',
      removeFromCart: 'removeItem',
    }),
    callButtonAction() {
      this.buttonAction(this.product);
      this.assignButtonProperties();
    },
    assignButtonProperties() {
      if (this.productInCart) {
        this.buttonClass = 'btn-warning';
        this.buttonCaption = 'Remove from Cart';
        this.buttonAction = this.removeFromCart;
      } else {
        this.buttonClass = 'btn-primary';
        this.buttonCaption = 'Add to Cart';
        this.buttonAction = this.addToCart;
      }
    }
  },
};
</script>

<style scoped>
</style>
