<template>
  <view class="all">
    <CustomNavbar></CustomNavbar>
    <scroll-view scroll-y class="scroll">
      <NavSwiper></NavSwiper>
      <EncourageWord></EncourageWord>
      <view v-if="userStore.profile.name">
        <TimeTable></TimeTable>
        <Lose></Lose>
      </view>
      <view v-else>
        <Signup></Signup>
      </view>
    </scroll-view>
    <u-back-top :scroll-top="scrollTop"></u-back-top>
  </view>
</template>

<script setup>
import CustomNavbar from './components/CustomNavbar.vue'
import NavSwiper from './components/NavSwiper.vue'
import EncourageWord from './components/EncourageWord.vue'
import TimeTable from './components/TimeTable.vue'
import Lose from './components/Lose.vue'
import Signup from '../../components/Signup.vue'
import { useUserStore } from '@/store/modules/user'
import { onPageScroll } from '@dcloudio/uni-app'
import { ref } from 'vue'

//返回顶部
const scrollTop = ref(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})

const userStore = useUserStore()
</script>

<style>
page {
  height: 100%;
  background-color: #f1f1f1;
  overflow: hidden;
}
.all {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll {
  flex: 1;
  overflow: hidden;
}
</style>
