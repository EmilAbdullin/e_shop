<template>
<div>
    <article class="article" v-for="article in articles">
      <div class="article__heading">
        <h2>{{article.heading}}</h2>
      </div>
      <div class="article__content">
        <p v-for="text in article.texts">
            {{text}}
        </p>
        <div v-if="article.moreInfoItems.length" class="article__more-info">
          <div v-for="moreInfoItem in article.moreInfoItems" class="article__more-info__item">
            <h3>{{moreInfoItem.subHeading}}</h3>
            <p>{{moreInfoItem.moreText}}
            </p>
          </div>
        </div>
      </div>
    </article>
</div>
</template>


<script>
export default {
    props:['articles']
}
</script>


<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";



.article{
    @include flex-layout;
    margin:100px 0;
    &__heading{
      width:25%;
      font-size:$heading-font-size;
      margin:15px 0;
    }
    &__content{
      width:70%;
      font-size:$content-font-size;
      line-height:30px;
      p{
        margin-bottom:15px;
      }
    }
    &__more-info{
      @include flex-layout;
      margin-top:50px;
      &__item{
        width:45%;
        h3{
          color:$light-gray-text;
          font-size:$subheading-font-size;
          font-weight: 300;
        }
      }
    }
  }


</style>