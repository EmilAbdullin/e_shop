<template>
    <div class="cart">
      <div v-if="itemsInCart.length" class="cart__orders-wrapper"> 
        <itemInCart/>
      </div>
        <div v-if="itemsInCart.length" class="cart__order-form">
          <orderForm/>
        </div>
        <p v-else style="text-align:center;width:100%;">
          Для заказа выберите и <router-link to="/">добавьте товар в корзину</router-link>
        </p>
    </div>
</template>

<script>
import orderForm from '@/components/orderForm'
import itemInCart from '@/components/itemInCart'
import {mapGetters} from 'vuex'
export default {
  computed:mapGetters(['itemsInCart']),
  components:{
    orderForm,itemInCart
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.cart{
  @include flex-layout;
  @include centered-gap;
  padding-bottom:120px;
  align-items: flex-start;
  max-width:$layout-width;
  margin-top:50px;
  @media screen and (max-width:991px) {
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom:120px;
  }
  &__orders-wrapper{
    width:60%;
    @media screen and (max-width:991px) {
      width:100%;
    }
  }
  &__order-form{
    width:25%;
     @media screen and (max-width:991px) {
      width:90%;
      margin:15px auto;
     }
  }
}
</style>
