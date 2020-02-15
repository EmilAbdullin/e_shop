<template>

<div>
    <div class="order-item" v-for="item in itemsInCart">
        <div class="order-item__delete-btn" @click="deleteItemFromCart(item.id)">&#10005;</div>
        <div class="order-item__image">
            <img :src="require('../assets/images/'+item.img)">
        </div>
        <div class="order-item__info-block">
            <div class="order-item__info-block__text">
                <div class="order-item__info-block__text__title">{{item.title}}</div>
                <div class="order-item__info-block__text__caption">{{item.description}}</div>
            </div>
            <div class="order-item__info-block__color-cost">
                <div class="order-item__info-block__color-cost__color">
                    <label>Цвет</label>
                    <ul v-if="typeof item.colors === 'object' ">
                        <li v-for="color in item.colors" :style="{backgroundColor:color}"></li>
                    </ul>
                    <ul v-else :style="{backgroundColor:item.colors}">
                    </ul>

                </div>
                <div class="order-item__info-block__color-cost__cost">
                    {{item.cost}} &#8381;
                </div>
            </div>
        </div>
    </div>
</div>

</template>


<script>
import {mapGetters} from 'vuex'

export default {
    computed:mapGetters(['itemsInCart']),
    methods:{
        deleteItemFromCart(id){
            this.$store.commit('deleteItemFromCart',id);
        }
    }
}
</script>


<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

    
        .order-item{
            @include flex-layout;
            @include bordered-box;
            position: relative;
            border-right:none;
            border-left:none;
            &__delete-btn{
                position: absolute;
                color:$light-gray-color;
                top:15px;
                right:15px;
                cursor: pointer;
                font-size:$heading-font-size;
                transition:all .3s ease-in-out;
                &:hover{
                    color:tomato;
                }
            }
            &__image{
                img{
                    width:360px;
                    height:300px;
                }
            }
            &__info-block{
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height:200px;

                &__text{
                    &__title{
                        font-weight: bold;
                        font-size:$content-font-size;
                    }
                    &__caption{
                        width:480px;
                        margin:15px 0;
                        font-size:$small-font-size;
                        color:$light-gray-color;
                    }
                }
                &__color-cost{
                    @include flex-layout;
                    &__color{
                        @include flex-layout;
                        label{
                                margin-right:5px;
                        }
                        ul{
                            list-style: none;
                            @include flex-layout;
                            }
                            li{
                                width:25px;
                                height:25px;
                                background:red;
                                border-radius:100%;
                                margin-right:5px; 
                                border: 1px solid gray;
                            }
                        }
                    }
                    &__cost{
                        font-size:$heading-font-size;
                    }
                }
            }
        
    


</style>
