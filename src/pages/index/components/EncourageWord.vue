<template>
  <view class="word">
    <view class="concent"> {{ wordData.concent }} </view>
    <view class="origin">----{{ wordData.origin }}</view>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const wordData = ref({})
const getWordData = () => {
  uniCloud
    .callFunction({
      name: 'EncourWord',
      data: {},
    })
    .then((res) => {
      wordData.value = res.result
      // console.log(res.result);
      // console.log(wordData.value)
    })
}

onMounted(() => {
  getWordData()
})
</script>

<style scoped lang="scss">
.word {
  width: 95%;
  height: 150rpx;
  margin: 20rpx auto;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: #fff;
}
.concent {
  padding: 15rpx;
}
.origin {
  float: right;
  padding-right: 10rpx;
}
</style>
