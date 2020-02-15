<template>
    <div class="order-block">
        <div class="order-block__heading">Оформление заказа</div>
        <div class="order-block__info-block">
            <div class="order-block__info-block__count">
                <span>Кол-во</span>
                <span>{{itemsInCart.length}}</span>
            </div>
            <div class="order-block__info-block__delivery">
                <span>Доставка</span>
                <span>Бесплатно</span>
            </div>
            <div class="order-block__info-block__cost">
                <span>Итого</span>
                <span>{{totalPrice}} &#8381;</span>
            </div>
        </div>
        <form class="order-block__form" @submit.prevent="toOrder">
            <input type="text" v-model="name" placeholder="ФИО" name="name">
            <input type="text" v-model="phone" placeholder="Номер телефона" name="phone">
            <button type="submit">Заказать</button>
        </form>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:mapGetters(['totalPrice','itemsInCart']),
    data(){
        return{
            name:'',
            phone:''
        }
    },
    methods:{
        toOrder(){
            if(this.name !== '' && this.phone !== ''){
                this.$store.commit('toOrder',{
                    name:this.name,
                    phone:this.phone
                });
                this.name = '';
                this.phone = '';
            }else{
                alert('Пожалуйста заполните все поля');
            }
        }
    }
}
</script>


<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";
    .order-block{
        padding:15px;
        width:100%;
        @include bordered-box;
        &__heading{
            font-weight:bold;
            text-align:center;
            font-size:$content-font-size;
        }
        &__info-block{
            &__count,&__delivery,&__cost{
                @include flex-layout;
                margin:35px 0;
            }
        }
        &__form{
            display:flex;
            flex-direction: column;
            input,button{
                margin-top:15px;
                padding:15px;
                background:none;
                outline:none;
                @include bordered-box
            }
            button{
                font-weight: bold;
                font-size:$content-font-size;
                cursor: pointer;
                background:$base-color;
                color:white;
            }

        }
        

    }
</style>