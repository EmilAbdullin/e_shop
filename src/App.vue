<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  beforeCreate(){
    let data = require('./assets/api/items.json');
    data.items.forEach(item => {
      console.log(item);
    })
  },
  components:{
    Navbar
  }
}
</script>

<style lang="scss">
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
#app {
  height:100%;
  width:100%;
}

</style>
