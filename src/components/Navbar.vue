<template>
    <div id="nav" class="navigation">
      <div class="navigation__logo">
        <router-link to="/">
          <Logo/>
        </router-link> 
      </div>
      <div class="navigation__links">
        <router-link to="/">Каталог</router-link> |
        <router-link to="/about">О нас</router-link>
      </div>
      <div class="navigation__cart">
        <router-link to="/cart">Корзина</router-link>
      </div>
    </div>
</template>


<script>
import Logo from '@/components/Logo'
export default {
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
  color:$base-color-text;
  max-width:$layout-width;

  &__logo{
    cursor: pointer;
  }

  &__links,&__cart{
      a{
        text-decoration: none;
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
          text-decoration: underline
        }
      }
   }
}

</style>