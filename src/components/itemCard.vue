<template>
    <div class="items">
        <div class="items__item-wrapper">
            <div class="items__item-wrapper__image">
                <img src="../assets/images/item__001.jpg"/>
            </div>
            <div class="items__item-wrapper__title">Стул Elbert голубая ткань</div>
            <div class="items__item-wrapper__caption">С белой тканью тоже есть.</div>
            <div class="items__item-wrapper__info">
                <div class="items__item-wrapper__info__colors">
                    <label>Цвета</label>
                    <ul>
                        <li style="background:red"></li>
                        <li style="background:blue"></li>
                    </ul>
                </div>
                <div class="items__item-wrapper__info__cost">8500 &#8381;</div>
            </div>
            <div class="items__item-wrapper__button">В корзину</div>
        </div>

        <div class="items__item-wrapper">
            <div class="items__item-wrapper__image">
                <img src="../assets/images/item__001.jpg"/>
            </div>
            <div class="items__item-wrapper__title">Стул Elbert голубая ткань</div>
            <div class="items__item-wrapper__caption">С белой тканью тоже есть.</div>
            <div class="items__item-wrapper__info">
                <div class="items__item-wrapper__info__colors">
                    <label>Цвета</label>
                    <ul>
                        <li style="background:red"></li>
                        <li style="background:blue"></li>
                    </ul>
                </div>
                <div class="items__item-wrapper__info__cost">8500 &#8381;</div>
            </div>
            <div class="items__item-wrapper__button">В корзину</div>
        </div>


        <div class="items__item-wrapper">
            <div class="items__item-wrapper__image">
                <img src="../assets/images/item__001.jpg"/>
            </div>
            <div class="items__item-wrapper__title">Стул Elbert голубая ткань</div>
            <div class="items__item-wrapper__caption">С белой тканью тоже есть.</div>
            <div class="items__item-wrapper__info">
                <div class="items__item-wrapper__info__colors">
                    <label>Цвета</label>
                    <ul>
                        <li style="background:red"></li>
                        <li style="background:blue"></li>
                    </ul>
                </div>
                <div class="items__item-wrapper__info__cost">8500 &#8381;</div>
            </div>
            <div class="items__item-wrapper__button">В корзину</div>
        </div>


        <div class="items__item-wrapper">
            <div class="items__item-wrapper__image">
                <img src="../assets/images/item__001.jpg"/>
            </div>
            <div class="items__item-wrapper__title">Стул Elbert голубая ткань</div>
            <div class="items__item-wrapper__caption">С белой тканью тоже есть.</div>
            <div class="items__item-wrapper__info">
                <div class="items__item-wrapper__info__colors">
                    <label>Цвета</label>
                    <ul>
                        <li style="background:red"></li>
                        <li style="background:blue"></li>
                    </ul>
                </div>
                <div class="items__item-wrapper__info__cost">8500 &#8381;</div>
            </div>
            <div class="items__item-wrapper__button">В корзину</div>
        </div>

        
    </div>
</template>


<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.items{
    @include centered-gap;
    @include flex-layout;
    flex-wrap:wrap;
    &__item-wrapper{
        width:30%;
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