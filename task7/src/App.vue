<template>

<div id="app">

<header>
<div class="container">
  <div class="row">

    <div class="col col-sm-9">
      <h1>Site</h1>
    </div>

    <div class="col col-sm-3">
      <div class="alert alert-default">
        <div>
          <router-link to="/cart">
            In Cart: {{ cartItemCounter }}
          </router-link>
        </div>
      </div>
    </div>

  </div>
  <hr>

</div>
</header>

<section>
<div class="container">
  <div class="row">

    <div class="col col-sm-3 menu">
      <ul class="list-group">
        <router-link
          v-for="(item, index) in menuList"
          :key="index"
          :to="item.url"
          tag="li"
          class="list-group-item"
          active-class="active"
        >
          <a>{{ item.title }}</a>
        </router-link>
      </ul>
    </div>

    <div class="col col-sm-9">
      <transition name="cross-fade">
        <router-view />
      </transition>
    </div>

  </div>
</div>
</section>

</div>

</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: "app",
    computed: {
      ...mapGetters('cart', [
        'totalCount'
      ]),
      ...mapGetters('menu', {
        menuList: 'items'
      }),
      cartItemCounter() {
        let count = this.totalCount;
        let prefix = count === 1 ? '' : 's';

        return `${count} Item${prefix}`;
      }
    }
  };
</script>

<style scoped>
  .list-group-item{
    transition: background 0.3s, color 0.3s;
  }

  .list-group-item a {
    text-decoration: none;
  }

  .list-group-item.active a {
    color: inherit;
  }

  .cross-fade-enter, .cross-fade-leave-to {
    opacity: 0;
  }

  .cross-fade-enter-active, .cross-fade-leave-active {
    transition: opacity 0.3s;
  }

  .cross-fade-leave-active {
    position: absolute;
    width: 96.5%;
  }
</style>
