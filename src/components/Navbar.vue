<template>
    <div id="nav" class="navigation">
      <div class="navigation__logo">
        <router-link to="/">
          <Logo
          :invert="false"
          />
        </router-link> 
      </div>
      <div class="navigation__links">
        <router-link to="/">Каталог</router-link>
        <router-link to="/about">О нас</router-link>
      </div>
      <div class="navigation__cart">
        <router-link to="/cart">&#128722;Корзина <span>{{itemsInCart.length}}</span></router-link>
      </div>
    </div>
</template>


<script>
import Logo from '@/components/Logo'
import {mapGetters} from 'vuex'
export default {
  computed:mapGetters(['itemsInCart']),
  components:{
    Logo
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.navigation{
  @include flex-layout;
  @include centered-gap;
  @include bordered-box;
  color:$base-color;

  &__logo{
    cursor: pointer;
  }

  &__links,&__cart{
      a{
        text-decoration: none;
        font-weight: bold;
        padding:0 15px;
        color:$base-color;
        &.router-link-exact-active {
          text-decoration: underline
        }
      }
   }
}

</style>