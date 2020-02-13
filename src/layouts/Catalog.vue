<template>
  <div class="catalog">
    <h1>Каталог</h1>
  </div>
</template>

<script>


export default {
  
}
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.catalog{
  @include flex-layout;
  @include centered-gap;
  max-width:$layout-width;
}

</style>
