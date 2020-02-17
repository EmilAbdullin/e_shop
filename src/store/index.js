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
    hasCardItems:true,
    order:{},
    isActiveFilter:false,
  },
  mutations: {
    checkColorInFilter(state,color){
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
    },
    filterItems(state,payload){
      state.isActiveFilter = true;
      if( (payload.costTo !== '' && payload.costFrom !== '') && (+payload.costTo < +payload.costFrom) ){
        alert('Выбран неверный интервал');
      }else if(payload.costTo === '' && payload.costFrom === ''){
        if(state.filteredColors.length > 0){
          this.commit('filterByColor');
        }else{
          state.filteredItems = state.items;
        }
      }else if( (payload.costTo === '' && payload.costFrom !== '') || (payload.costTo !=='' && payload.costFrom === '') || (payload.costTo !=='' && payload.costFrom !== '')){
        if(state.filteredColors.length > 0){
          this.commit('filterByColorAndCost',{
            costFrom:payload.costFrom,
            costTo:payload.costTo
          })
        }else{
          this.commit('filterByCost',{
            costFrom:payload.costFrom,
            costTo:payload.costTo
          })
        }
      }
    },
    filterByColor(state){
      state.filteredItems = [];
      state.items.filter(item => {
        state.filteredColors.forEach(color =>{
          if(item.colors.includes(color) && !state.filteredItems.includes(item)){
            state.filteredItems.push(item);
          }
        })
      })
    },
    filterByColorAndCost(state,costInterval){
      state.filteredItems = [];
      if(costInterval.costTo !== '' && costInterval.costFrom === ''){
        state.items.filter(item => {
          state.filteredColors.forEach(color => {
            if( (item.colors.includes(color)) && (!state.filteredItems.includes(item)) && (+item.cost <= +costInterval.costTo)){
              state.filteredItems.push(item);
            }else{
              state.hasCardItems = !!state.filteredItems.length;
            }
          })
        })
      }else if(costInterval.costFrom !== '' && costInterval.costTo === ''){
        state.items.filter(item => {
          state.filteredColors.forEach(color =>{
            if( item.colors.includes(color) && !state.filteredItems.includes(item) && (+item.cost >= +costInterval.costFrom)){
              state.filteredItems.push(item);
            }else{
              state.hasCardItems = !!state.filteredItems.length;
            }
          })
        })
      }else if(costInterval.costFrom !== '' && costInterval.costTo !== ''){
        state.items.filter(item => {
          state.filteredColors.forEach(color =>{
            if( item.colors.includes(color) && !state.filteredItems.includes(item) && (+item.cost >= +costInterval.costFrom) && (+item.cost <= +costInterval.costTo)){
              state.filteredItems.push(item);
            }else{
              state.hasCardItems = !!state.filteredItems.length;
            }
          })
        })
      }
    },
    filterByCost(state,costInterval){
      state.filteredItems = [];
      if(costInterval.costTo !== '' && costInterval.costFrom === ''){
        state.items.filter(item => {
          state.filteredColors.forEach(color => {
            if(+item.cost <= +costInterval.costTo){
              state.filteredItems.push(item);
            }else{
              state.hasCardItems = !!state.filteredItems.length;
            }
          })
        })
      }else if(costInterval.costFrom !== '' && costInterval.costTo === ''){
        state.items.filter(item => {
            if(+item.cost >= +costInterval.costFrom){
              state.filteredItems.push(item);
            }else{
              state.hasCardItems = !!state.filteredItems.length;
            }
        })
      }else if(costInterval.costFrom !== '' && costInterval.costTo !== ''){
        state.items.filter(item => {
            if((+item.cost >= +costInterval.costFrom) && (+item.cost <= +costInterval.costTo)){
              state.filteredItems.push(item);
            }else{
              state.hasCardItems = !!state.filteredItems.length;
            }
        })
      }
    },
    clearFilter(state){
      state.isActiveFilter = false;
      state.filteredItems = state.items;
      state.filteredColors = [];
      state.colors.map(item => item.isActive = false)
      state.hasCardItems = true;
    },
    addItemToCart(state,payload){
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
    hasCardItems(state){
      return state.hasCardItems;
    },
    itemsInCart(state){
      return state.cart;
    },
    totalPrice(state){
      return state.totalPrice;
    },
    isActiveFilter(state){
      return state.isActiveFilter;
    }
  }
})
