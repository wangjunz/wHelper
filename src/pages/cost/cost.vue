<template>
  <Ring></Ring>
  <Line :dataList="dataList"></Line>
  <view class="advice">
    <u-read-more show-height="250">
      <rich-text :nodes="dataList.advice"></rich-text>
    </u-read-more>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import Line from './components/Line.vue'
import Ring from './components/Ring.vue'
import { useUserStore } from '@/store/modules/user'

const dataList = ref({})

uniCloud
  .callFunction({
    name: 'Cost',
  })
  .then((res) => {
    dataList.value = res.result
  })

//登录
const userStore = useUserStore()
if (!userStore.profile) {
  uni.showModal({
    title: '请先登录',
    showCancel: false,
    success: (success) => {
      if (success) {
        uni.navigateTo({ url: '/pages/login/login' })
      }
    },
  })
}
console.log(userStore.profile)
</script>

<style scoped lang="scss">
.ring {
  background-color: #f5f9fc;
  .ringtitle {
    padding: 0 0 0 20rpx;
    font-family: SourceHanSansCN-Medium;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    line-height: 24px;
    letter-spacing: 0px;
    color: #898484;
  }
  .charts-box {
    padding-top: 25rpx;
    width: 95%;
    height: 300px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: #fff;
  }
}
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.advice {
  width: 690rpx;
  // height: 191rpx;
  margin: 0 auto;
  // background-color: #514c4c;
  box-shadow: 10rpx 10rpx 30rpx 10rpx rgba(18, 18, 18, 0.1);
  border-radius: 14rpx;
  padding: 30rpx 25rpx;
  margin-top: 30rpx;
}
</style>
