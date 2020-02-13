<template>
    <div class="footer">
        <div class="footer__logo">
            <Logo
            :invert="true"
            />
        </div>
        <div class="footer__social-links">
            <socialIcons/>
        </div>
    </div>
</template>


<script>
import Logo from './Logo'
import socialIcons from './socialIcons'
export default {
    components:{
        Logo,socialIcons
    }
}
</script>


<style lang="scss">
    @import '../assets/styles/variables';
    @import '../assets/styles/mixins';

    .footer{
        background:$base-color;
        @include centered-gap;
        @include flex-layout;
        max-width:$layout-width;
        width:100%;
        position: absolute;
        bottom: 0;


        &__social-links>ul{
            @include flex-layout;
            width:120px;
        }
    }

</style>