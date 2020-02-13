<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  beforeCreate(){
    let data = require('./assets/api/items.json');
    data.items.forEach(item => {
      console.log(item);
    })
  },
  components:{
    Navbar,Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: "Roboto",sans-serif;
}

html,body{
  height:100%;
}

#app {
  min-height: 100%;
  width:100%;
  position: relative;
}

</style>
