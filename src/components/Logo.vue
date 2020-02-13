<template>
    <div>
        <img :class="{invert:invert}" src="../assets/images/logo.svg">
    </div>
</template>

<script>

export default{
    props:['invert']
}

</script>

<style lang="scss">
 img{
    width:50px;
    height:50px;
 }
 
 .invert{
     filter:invert(100%);
 }

</style>