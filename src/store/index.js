import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let data = require('../assets/api/items.json');
export default new Vuex.Store({
  state: {
    items:data.items,
    cart:[],
    colors:[  
      {name:'black',colorVal:'black',isActive:false},
      {name:'white',colorVal:'white',isActive:false},
      {name:'blue', colorVal:'blue',isActive:false},
      {name:'red',  colorVal:'red',isActive:false},
  ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
