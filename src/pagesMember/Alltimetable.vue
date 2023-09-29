<template>
  <view class="container">
    <view class="scroll-view">
      <view class="fixed-column">
        <view class="fixed-item" :class="one ? 'active' : ''">星期一</view>
        <view class="fixed-item" :class="two ? 'active' : ''">星期二</view>
        <view class="fixed-item" :class="three ? 'active' : ''">星期三</view>
        <view class="fixed-item" :class="four ? 'active' : ''">星期四</view>
        <view class="fixed-item" :class="five ? 'active' : ''">星期五</view>
        <view class="fixed-item" :class="six ? 'active' : ''">星期六</view>
        <view class="fixed-item" :class="seven ? 'active' : ''">星期日</view>
      </view>
      <view class="niceui-schedule-right">
        <view class="scrollable-content" v-for="(item, index) in timeList" :key="item.id">
          <!-- 右侧滚动内容 -->
          <view class="scroll-item" v-for="time in timeList[index].data" :key="time.name">
            <view>{{ time.name }}</view>
            <view>{{ time.time }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { onShow } from '@dcloudio/uni-app'
import moment from 'moment'
import { ref } from 'vue'

const timeList = ref({})
const timeItem = ref({})
onShow(() => {
  uniCloud
    .callFunction({
      name: 'Alltime',
    })
    .then((res) => {
      // console.log(res)
      timeList.value = res.result.data
      timeItem.value = res.result.data[0].data
    })
})
const nowweek = ref()
nowweek.value = moment().format('d')
const one = nowweek.value == 1
const two = nowweek.value == 2
const three = nowweek.value == 3
const four = nowweek.value == 4
const five = nowweek.value == 5
const six = nowweek.value == 6
const seven = nowweek.value == 0
0
</script>

<style>
.active {
  background-color: rgb(164, 161, 161);
}
.container {
  height: 100%;
  width: 100%;
}

.scroll-view {
  white-space: nowrap;
  display: flex;
}

.fixed-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 200rpx; /* 左侧固定列宽度，根据实际需求调整 */
  background-color: #f5f5f5; /* 左侧固定列背景色 */
}

.fixed-item {
  width: 100px; /* 每个固定项宽度 */
  height: 150rpx;
  line-height: 150rpx;
  text-align: center; /* 文字居中 */
}

.scrollable-content {
  width: calc(100vw - 200rpx);
  height: 150rpx;
  display: flex;
  padding: 0rpx; /* 可根据需要调整内边距 */
  overflow: scroll;
}

.scroll-item {
  margin: 0 40rpx;
  height: 150rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; /* 文字居中 */
}
</style>
