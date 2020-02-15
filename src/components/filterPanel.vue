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
                    @click="filterByColor(color)" 
                    :class="{active: color.isActive}"></li>
                </ul>
            </div>
            <div class="filter-panel__cost">
                <label>Цены</label>
                    <input @input="filterByCost" @keydown="checkFields" v-model="costFrom" :placeholder="costFromPlaceholder" />
                    <input @input="filterByCost" @keydown="checkFields" v-model="costTo" :placeholder="costToPlaceholder" />
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
    computed:mapGetters(['filterPanelColors','costFromPlaceholder','costToPlaceholder']),
    methods:{
        filterByColor(color){
            this.$store.commit('filterByColor',color);
        },
        filterByCost(){
            console.log(event);
            console.log('dada');
            this.costFrom = this.costFrom.replace(/[^0-9]/g,'');
            this.costTo = this.costTo.replace(/[^0-9]/g,'');
            this.$store.commit('filterByCost',{
                costFrom:this.costFrom,
                costTo:this.costTo
            });
            
        },
        checkFields(event){
            this.$store.commit('filterByCost',event);
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
        @media screen and (max-width:640px) {
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
            width:250px;
            input{
                width:100px;
                padding:10px;
                border:none;
                outline:none;
            }
        }
    }
</style>