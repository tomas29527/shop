<template>
  <div>
    <!--导航-->
    <TypeNav/>
    <!--列表-->
    <ListContainer/>
    <!--推荐-->
    <Recommend/>
    <!--排行-->
    <Rank/>
    <!--喜欢-->
    <Like/>
    <!--楼层-->
    <Floor v-for="floorInfo in homeFloorList" :key="floorInfo.id" :floorInfo="floorInfo" />
    <!--商标-->
    <Brand/>
  </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  computed:{
    ...mapState({
      homeFloorList:state=>state.home.homeFloorList
    })
  },
  mounted() {
    this.$store.dispatch('getHomeFloorList')
  }
}
</script>

<style scoped>

</style>