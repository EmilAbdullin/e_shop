<template>
    <div class="cart">
      <div class="cart__orders-wrapper"> 
        <itemInCart/>
        <itemInCart/>
        <itemInCart/>
      </div>
        <orderForm/>
    </div>
</template>

<script>
import orderForm from '@/components/orderForm'
import itemInCart from '@/components/itemInCart'
export default {
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
  &__order-wrappers{
    width:calc(100% - 640px);
  }
}
</style>
