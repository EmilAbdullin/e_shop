<template>
    <div id="filter">
        <div class="filter-panel">
            <div class="filter-panel__heading">
                <h3>Выберете параметры</h3>
            </div>
            <div class="filter-panel__colors">
                <label>Цвет</label>
                <ul>
                    <li 
                    v-for="color in filterPanelColors" 
                    v-bind:style="{backgroundColor:color.colorVal}" 
                    @click="checkColorInFilter(color)" 
                    :class="{active: color.isActive}"></li>
                </ul>
            </div>
            <div class="filter-panel__cost">
                <label>Цены</label>
                    <input v-model="costFrom" @input="digitValidate" placeholder="от" />
                    <input v-model="costTo"   @input="digitValidate" placeholder="до" />
            </div>
            <div v-if="!isActiveFilter" class="filter-panel__submit-btn" @click="filterItems">
                Применить
            </div>
            <div v-else class="filter-panel__cancel-btn" @click="clearFilter">
                Сбросить
            </div>
        </div>
    </div>

</template>



<script>
import {mapGetters} from 'vuex'

export default {
    data(){
        return{
            costFrom:'',
            costTo:''
        }
    },
    computed:mapGetters(['filterPanelColors','isActiveFilter']),
    methods:{
        checkColorInFilter(color){
            this.$store.commit('checkColorInFilter',color);
        },
        filterItems(){
            this.$store.commit('filterItems',{
                costFrom:this.costFrom,
                costTo:this.costTo
                
            });
            this.costTo = '';
            this.costFrom = '';
        },
        digitValidate(){
            this.costFrom = this.costFrom.replace(/[^0-9]/g,'');
            this.costTo = this.costTo.replace(/[^0-9]/g,'');
        },
        clearFilter(){
            this.$store.commit('clearFilter');
        }
        
    }
}
</script>


<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";
    #filter{
        background-color:#F2F2F2;
    }
    .filter-panel{
        @include flex-layout;
        @include centered-gap;
        @media screen and (max-width:768px) {
            flex-direction: column;
            align-items: flex-start;
        }
        &__colors{
            @include flex-layout;
            width:200px;
            margin:25px 0;
            ul{
                width:140px;
                @include flex-layout;
                li{
                    width:25px;
                    height:25px;
                    border-radius:100%;
                    display: block;
                    cursor: pointer;
                    border:1px solid gray;
                }
                li.active{
                    box-shadow:0 0 5px 1px gray;
                }
            }
        }
        &__cost{
            @include flex-layout;
            width:280px;
            input{
                width:100px;
                padding:10px;
                border:none;
                outline:none;
            }
        }
        &__submit-btn{
            padding:10px 25px;
            border: none;
            background: #1DD87E;
            color:white;
            border-radius: 2.5px;
            box-shadow: 0 0 5px -1px grey;
            outline:none;
            text-transform:uppercase;
            cursor:pointer;
            font-size:$small-font-size;
            @media screen and (max-width:768px) {
                margin-top:20px;
            }
        }
        &__cancel-btn{
            background:tomato;
            padding:10px 25px;
            border: none;
            color:white;
            border-radius: 2.5px;
            box-shadow: 0 0 5px -1px grey;
            outline:none;
            text-transform:uppercase;
            cursor:pointer;
            font-size:$small-font-size;
            @media screen and (max-width:768px) {
                margin-top:20px;
            }
        }
    }
</style>