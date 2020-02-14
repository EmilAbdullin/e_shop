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
                    v-for="color in colors" 
                    v-bind:style="{backgroundColor:color.colorVal}" 
                    @click="filterByColor(color)" 
                    :class="{active: color.isActive}"></li>
                </ul>
            </div>
            <div class="filter-panel__cost">
                <label>Цены</label>
                    <input @input="filterByCost" v-model="costFrom" placeholder="от" />
                    <input @input="filterByCost" v-model="costTo" placeholder="до" />
            </div>
        </div>
    </div>

</template>



<script>
export default {
    
    data(){
    return{
        colors:this.$store.state.colors,
        costFrom:'',
        costTo:'',
        filteredColors:this.$store.state.filteredColors
    }
    },
    methods:{
        filterByColor(color){
            this.$store.commit('filterByColor',color);
        },
        filterByCost(){
            console.log(this.costFrom);
            console.log(this.costTo)
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
        
        &__colors{
            @include flex-layout;
            width:200px;
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