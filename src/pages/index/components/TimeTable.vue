<script setup>
import moment from 'moment'
import { onMounted, ref } from 'vue'
import { usetimeTableStore } from '@/store/modules/timetable'

const timeTableStore = usetimeTableStore()
//获取星期几
const week = moment().format('dddd')

const timelist = ref([])

//根据星期几返回对应课表
const getTimeTableList = () => {
  uniCloud
    .callFunction({
      name: 'TimeTable',
      data: { week },
    })
    .then((res) => {
      // console.log(res)
      timelist.value = res.result.data[0]
      //向pinia里保存数据
      // timeTableStore.setTable(res.result.data[0])
      // console.log(timeTableStore.timeTableData)
    })
}

onMounted(() => {
  getTimeTableList()
})
// const now=new Date();
</script>

<template>
  <view class="timetable">
    <view class="title">
      <view class="left">
        <text class="dian">·</text>
        <text class="font">今日课表</text>
      </view>
      <view class="right">
        <image
          src="../../../static/icon/kebiao.png"
          mode="scaleToFill"
          style="width: 20px; height: 20px"
        ></image>
      </view>
    </view>
    <view class="concent">
      <view class="timeitem" v-for="item in timelist.data" :key="item.id">
        <view class="itemleft">
          <view class="name">{{ item.name }}</view>
          <view class="time">{{ item.time }}</view>
        </view>
        <view class="itemright">
          <text class="where">{{ item.position }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.timetable {
  width: 95%;
  // height: 1700rpx;
  margin: 10rpx auto;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  .title {
    height: 75rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(216, 213, 213);
    .left {
      padding: 0 20rpx;
      .dian {
        font-size: 30px;
        font-weight: 700;
        color: aquamarine;
        vertical-align: middle;
      }
      .font {
        vertical-align: middle;
        margin-left: 10rpx;
        color: #636363;
      }
    }
    .right {
      padding: 12px 20px;
    }
  }
  .concent {
    .timeitem {
      height: 80rpx;
      margin: 20rpx 45rpx;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid rgb(216, 213, 213);
      .itemleft {
        margin-top: -5rpx;
        .name {
          font-size: 14px;
        }
        .time {
          padding-left: 30rpx;
          font-size: 10px;
        }
      }
      .itemright {
        .where {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
