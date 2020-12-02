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
    <table class="table table-bordered">     
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
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ itemTitle(item) }}</td>
          <td>{{ itemPrice(item) }}</td>
          <td>{{ item.count }}</td>
          <td>{{ itemTotalPrice(item) }}</td>
        </tr>
      </tbody>
    </table>
    <hr>
    <h2>Total Price: {{ totalPrice }}</h2>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    computed: {
      ...mapGetters('checkout', {
        fields: 'fields',
        name: 'nameFieldValue'
      }),
      ...mapGetters('cart', {
        items: 'items'
      }),  
      ...mapGetters('products', {
        product: 'productById'
      }),
      itemTitle() {
        return (item) => this.product(item.id).title;
      },
      itemPrice() {
        return (item) => this.product(item.id).price;
      },
      itemTotalPrice() {
        return (item) => this.itemPrice(item) * item.count;
      },
      totalPrice() {
        return this.items.reduce((total, item) => {
          return total += this.itemTotalPrice(item);
        }, 0);
      }
    }
  };
</script>

<style scoped>
</style>
