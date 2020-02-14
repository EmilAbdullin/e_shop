import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let data = require('../assets/api/items.json');
export default new Vuex.Store({
  state: {
    items:[...data.items],
    filteredItems:[...data.items],
    cart:[],
    colors:[  
      {name:'black',colorVal:'black',isActive:false},
      {name:'white',colorVal:'white',isActive:false},
      {name:'blue', colorVal:'blue',isActive:false},
      {name:'red',  colorVal:'red',isActive:false},
  ],
  filteredColors:[]
  },
  mutations: {
    filterByColor(state,color){
      state.filteredItems = [];
      state.colors.map(item => {
        if (item.name === color.name) {
          item.isActive = !item.isActive
        }
      })
        if(state.filteredColors.includes(color.name)){
          let index = state.filteredColors.findIndex(i => i === color.name);
          state.filteredColors.splice(index,1);
        }else{
          state.filteredColors.push(color.name);
        }
        state.items.filter(item => {
          if(state.filteredColors.length > 0){
            state.filteredColors.forEach(color =>{
              if(item.colors.includes(color) && !state.filteredItems.includes(item)){
                state.filteredItems.push(item);
              }
            })
          }else{
            state.filteredItems = state.items;
          }

        })
      
    },
  },
  actions: {
  },
  modules: {
  },
  getters:{
    allItems(state){
      return state.filteredItems;
    }
  }
})
