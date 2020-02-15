import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let data = require('../assets/api/items.json');
export default new Vuex.Store({
  state: {
    items:[...data.items],
    filteredItems:[...data.items],
    cart:[],
    totalPrice:0,
    colors:[  
      {name:'black',colorVal:'black',isActive:false},
      {name:'white',colorVal:'white',isActive:false},
      {name:'blue', colorVal:'blue',isActive:false},
      {name:'red',  colorVal:'red',isActive:false},
    ],
    filteredColors:[],
    costFromPlaceholder:'от',
    costToPlaceholder:'до',
    hasCardItems:true,
    order:{}
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
    filterByCost(state,payload){
      
    },
    checkFields(event){

    },
    addItemToCart(state,payload){
      console.log('PAYLOAD.DELID',payload.delId);
      let item = {};
      state.items.find(i => {
        if(i.id === payload.id){
          item.id = i.id;
          item.img = i.img;
          item.title = i.title;
          item.description = i. description;
          item.colors = i.colors;
          item.cost = i.cost
        }
      });
      item.delId = payload.delId;
      state.cart.push(item);
      state.totalPrice += +item.cost;
      item = {};
    },
    deleteItemFromCart(state,item){
      state.cart = state.cart.filter(i => {
        if(i.delId === item.delId){
          state.totalPrice -= +i.cost;
        }else{
          return i;
        }
      })
    },
    toOrder(state,payload){
      let order = {
        name:payload.name,
        phone:payload.phone,
        items:[].concat(state.cart),
        totalPrice:state.totalPrice
      }
      state.order = order;
      state.cart = [];
      setTimeout(()=>{
        alert('Ваша заявка принята');
        console.log(state.order);
      },5000)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    allItems(state){
      return state.filteredItems;
    },
    filterPanelColors(state){
      return state.colors;
    },
    costFromPlaceholder(state){
      return state.costFromPlaceholder;
    },
    costToPlaceholder(state){
      return state.costToPlaceholder;
    },
    hasCardItems(state){
      return state.hasCardItems;
    },
    itemsInCart(state){
      return state.cart;
    },
    totalPrice(state){
      return state.totalPrice;
    }
  }
})
