<template>
  <div class="catalog">

    <articleItem
    :articles="articles"
    />
    <filterPanel/>
    <div v-if="hasCardItems">
      <itemCard/>
    </div>
    <div v-else class="catalog__notify">Товар не найден</div>
  </div>
</template>

<script>
import articleItem from '@/components/articleItem'
import filterPanel from '@/components/filterPanel'
import itemCard from '@/components/itemCard'
import {mapGetters} from 'vuex'
export default {
  components:{
    articleItem,filterPanel,itemCard
  },
  computed:mapGetters(['hasCardItems']),
  data(){
    return{
      articles:[
        {id:1,heading:`Стиль минимализм в интерьере`,texts:[
          `Английское слово minimalism ёмко и лаконично отражает суть одноимённого направления
          дизайна.Описание его концепции можно представить следующим образом:ясность,точно композиции,простота,
          сдержанное использование вырызительных средств
          `,
          `Дизайнеры прибегают к применению природных и промышленных материалов с малыми объёмами,нейтральной черно-серой цветовой гаммой,простыми геометрическими
          формами.Пространство и свет грамотно планируются и моделируются
          `],
            moreInfoItems:[]
        }
      ],
    }
  },
}
</script>


<style lang="scss">
@import "../assets/styles/variables";

.catalog{
  padding-bottom:120px;
  &__notify{
    text-align:center;
    font-weight: bold;
    font-size:$heading-font-size;
    padding:60px 0;
  }
}
</style>
