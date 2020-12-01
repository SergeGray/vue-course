<template>
  <div>
    <h1>Cart</h1>
    <hr />
    <div
      v-if="products.length === 0"
      class="alert alert-warning"
    >
      Your cart is empty
    </div>
    <div v-else>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(product, index) in products"
            :key="index"
          >
            <td>{{ productData(product.id).title }}</td>
            <td>{{ productData(product.id).price }}</td>
            <td>
              <input
                type="number"
                :value="productData(product.id).amount"
                @input="setProductAmount($event, product)"
              >
              <button
                class="btn btn-primary"
                @click="increaseProductCount(product)"
              >+</button>
              <button
                class="btn btn-warning"
                @click="decreaseProductCount(product)"
              >-</button>
            </td>
            <td>{{ productData(product.id).totalPrice }}</td>
            <td>
              <button
                class="btn btn-danger"
                @click="removeProduct(product)"
              >X</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="btn btn-success">Order Now</button>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      ...mapGetters('cart', {
        products: 'products',
        cartProduct: 'productById'
      }),
      ...mapGetters('products', {
        shopProduct: 'itemById'
      }),
      productData() {
        return (id) => {
          let shopData = this.shopProduct(id);
          let cartData = this.cartProduct(id);
          return {
            title: shopData.title,
            price: shopData.price,
            amount: cartData.count,
            totalPrice: shopData.price * cartData.count
          }
        }
      },
      empty() {
        return this.products.length === 0;
      }
    },
    methods: {
      ...mapActions('cart', [
        'increaseProductCount',
        'decreaseProductCount',
        'setProductCount',
        'removeProduct'
      ]),
      setProductAmount(event, product) {
        this.setProductCount({
          id: product.id,
          newCount: event.target.value
        });
      }
    }
  }
</script>

<style scoped>
</style>
