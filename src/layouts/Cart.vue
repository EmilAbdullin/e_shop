<template>
    <div class="cart">
        <h1>Cart</h1>
    </div>
</template>


<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.cart{
  @include flex-layout;
  @include centered-gap;
  max-width:$layout-width;
}


</style>
