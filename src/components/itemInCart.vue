<template>

<div>
    <div class="order-item">
        <div class="order-item__delete-btn">&#10005;</div>
        <div class="order-item__image">
            <img src="../assets/images/item__001.jpg">
        </div>
        <div class="order-item__info-block">
            <div class="order-item__info-block__text">
                <div class="order-item__info-block__text__title">Обеденный стол Renno 100 см</div>
                <div class="order-item__info-block__text__caption">Обеденный стол Renno от Storeforhome стильное решение для вашего пространства</div>
            </div>
            <div class="order-item__info-block__color-cost">
                <div class="order-item__info-block__color-cost__color">
                    <label>Цвет</label>
                    <ul><li></li></ul>
                </div>
                <div class="order-item__info-block__color-cost__cost">
                    24500Р
                </div>
            </div>
        </div>
    </div>
</div>

</template>

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
                        ul{
                            list-style: none;
                            @include flex-layout;
                            li{
                                width:25px;
                                height:25px;
                                background:red;
                                border-radius:100%;
                                margin:0 15px; 
                                border: 1px solid gray;
                            }
                        }
                    }
                    &__cost{
                        font-size:$heading-font-size;
                    }
                }
            }
        }
    


</style>
