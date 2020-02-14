<template>
    <div class="order-block">
        <div class="order-block__heading">Оформление заказа</div>
        <div class="order-block__info-block">
            <div class="order-block__info-block__count">
                <span>Кол-во</span>
                <span>2</span>
            </div>
            <div class="order-block__info-block__delivery">
                <span>Доставка</span>
                <span>Бесплатно</span>
            </div>
            <div class="order-block__info-block__cost">
                <span>Итого</span>
                <span>34 400 Р</span>
            </div>
        </div>
        <form class="order-block__form" @submit.prevent>
            <input type="text" placeholder="ФИО" name="name">
            <input type="text" placeholder="Номер телефона" name="phone">
            <button type="submit">Заказать</button>
        </form>

    </div>
</template>



<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";
    .order-block{
        padding:15px;
        width:480px;
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