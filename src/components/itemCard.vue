<template>
    <div class="items">
        <div class="items__item-wrapper" v-for="(item,key) of allItems">
            <div class="items__item-wrapper__image">
                <img :src="require(`../assets/images/${item.img}`)"/>
            </div>
            <div class="items__item-wrapper__title">{{item.title}}</div>
            <div class="items__item-wrapper__caption">{{item.description}}</div>
            <div class="items__item-wrapper__info">
                <div class="items__item-wrapper__info__colors">
                    <label>Цвета</label>
                    <ul v-if="typeof item.colors === 'object'">
                        <li  v-for="(color,key) of item.colors" :key="key" :style="{backgroundColor:color}"></li>
                    </ul>
                    <ul v-else>
                        <li :style="{backgroundColor:item.colors}"></li>
                    </ul>
                </div>
                <div class="items__item-wrapper__info__cost">{{item.cost}} &#8381;</div>
            </div>
            <div class="items__item-wrapper__button" @click="addToCart(item.id)">В корзину</div>
        </div>
        
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
    computed:mapGetters(['allItems']),
    methods:{
        addToCart(id){
            let delId = new Date().getTime();
            this.$store.commit('addItemToCart',{
                id,delId
            });
        }
    }
}

</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";
.items{
     display: flex;
    flex-wrap: wrap;
    padding:75px 0 0 75px;
    @media screen and (max-width:991px) {
        justify-content:center;
    }
    @media screen and (max-width:640px) {
        padding:inherit;
    }
    &__item-wrapper{
        justify-self:center;
        align-self:flex-end;
        width:calc(100% / 3);
        border: 0 solid transparent;
        border-width: 0 75px 75px 0;
        @media screen and (max-width:1280px) {
            width:calc(100% / 2);
        }
        @media screen and (max-width:991px) {
            width:75%;
        }
        @media screen and (max-width:640px) {
            border-width:0;
        }
        &__image{
            img{
                width:360px;
                height: 300px;
                display: block;
                margin:0 auto;
            }
            
        }
        &__title{
            color:$base-color;
            font-size:$content-font-size;
            font-weight: bold;
        }

        &__caption{
            color:$light-gray-color;
            font-size:$small-font-size;
            margin:10px 0;
        }
        &__info{
            @include flex-layout;
            margin-bottom:15px;
            &__colors{
                @include flex-layout;
                label{
                    margin-right:15px;
                    font-weight: bold;
                }
                ul{
                     @include flex-layout;
                     width:auto;
                     list-style: none;
                    li{   
                        width:25px;
                        height:25px;
                        border-radius:100%;
                        display: block;
                        cursor: pointer;
                        border:1px solid gray;
                        margin-right:10px;
                    }
                }
            }
            &__cost{
                font-size:$heading-font-size;
            }
        }

        &__button{
            width:100%;
            text-align: center;
            padding:15px;
            border:1px solid $base-color;
            font-size: $small-font-size;
            font-weight:bold;
            cursor: pointer;
            transition:all .3s ease-in-out;
            &:hover{
                background:$base-color;
                color:white;
            }
        }
    }
}


</style>