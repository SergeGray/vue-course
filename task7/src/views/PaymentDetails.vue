<template>
  <div>
    <h2>Hello, {{ name }}</h2>
    <h3>Your payment details:</h3>
    <hr>
    <table class="table table-bordered">
      <tbody>
        <tr
          v-for="(field, index) in fields"
          :key="index"
        >
          <td>{{ field.title }}</td>
          <td>{{ field.value }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <h3>Ordered Items:</h3>
    <hr>
    <cart-items-table :checkedOut="true" />
    <hr>
    <h2>Total Price: {{ totalPrice }}</h2>
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
      ...mapGetters('checkout', {
        fields: 'fields',
        name: 'nameFieldValue'
      }),
      ...mapGetters('cart', {
        items: 'items'
      }),  
      ...mapGetters('products', {
        productById: 'productById'
      }),
      totalPrice() {
        return this.items.reduce((total, item) => {
          return total += this.productById(item.id).price * item.count;
        }, 0);
      }
    }
  };
</script>

<style scoped>
</style>
