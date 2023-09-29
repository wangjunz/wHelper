<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'
import dateUtil from '../uni_modules/niceui-script-util-collection/util/dateUtil'
//日期
const now = parseInt(moment().format('D')) //日
const month = parseInt(moment().format('M')) //月
const year = parseInt(moment().format('YYYY')) //年
//星期
const nowweek = dateUtil.getWeekDay(dateUtil.getData(0)).slice(-1)
const yone = dateUtil.getWeekDay(dateUtil.getData(-1)).slice(-1)
const ytwo = dateUtil.getWeekDay(dateUtil.getData(-2)).slice(-1)
const ythree = dateUtil.getWeekDay(dateUtil.getData(-3)).slice(-1)
const tone = dateUtil.getWeekDay(dateUtil.getData(1)).slice(-1)
const ttwo = dateUtil.getWeekDay(dateUtil.getData(2)).slice(-1)
const tthree = dateUtil.getWeekDay(dateUtil.getData(3)).slice(-1)

//倒计时
const today = dateUtil.getToday()
const jsday = ref()
const js = ref()
const gqday = ref()
const gq = ref()
const qnday = ref()
const qn = ref()
const ksday = ref()
const ks = ref()
const countDown = () => {
  if ((month >= 9) & (now > 10)) {
    js.value = year + 1
    jsday.value = dateUtil.dateDiff(`${js.value}-9-10`, today)
  } else {
    jsday.value = dateUtil.dateDiff(`${year}-9-10`, today)
  }
  if ((month >= 10) & (now > 1)) {
    gq.value = year + 1
    gqday.value = dateUtil.dateDiff(`${gq.value}-10-1`, today)
  } else {
    gqday.value = dateUtil.dateDiff(`${year}-10-1`, today)
  }
  if ((month >= 5) & (now > 4)) {
    qn.value = year + 1
    qnday.value = dateUtil.dateDiff(`${qn.value}-5-4`, today)
  } else {
    qnday.value = dateUtil.dateDiff(`${year}-5-4`, today)
  }
  if ((month >= 12) & (now > 30)) {
    ks.value = year + 1
    ksday.value = dateUtil.dateDiff(`${ks.value}-12-30`, today)
  } else {
    ksday.value = dateUtil.dateDiff(`${year}-12-30`, today)
  }
}
onMounted(() => {
  countDown()
})

const { windowHeight } = uni.getSystemInfoSync()
</script>

<template>
  <view class="all" :style="{ height: windowHeight + 'px' }">
    <view class="top">
      <view class="shownow">{{ today }}</view>
      <view class="line"></view>
      <view class="active"></view>
      <view class="daynum">
        <view class="week">
          <view class="weektop">{{ ythree }}</view>
          <view class="weebottom">{{ now - 3 }}</view>
        </view>
        <view class="week">
          <view class="weektop">{{ ytwo }}</view>
          <view class="weebottom">{{ now - 2 }}</view>
        </view>
        <view class="week">
          <view class="weektop">{{ yone }}</view>
          <view class="weebottom">{{ now - 1 }}</view>
        </view>
        <view class="week">
          <view class="weektop">{{ nowweek }}</view>
          <view class="weebottom white">{{ now }}</view>
        </view>
        <view class="week">
          <view class="weektop">{{ tone }}</view>
          <view class="weebottom">{{ now + 1 }}</view>
        </view>
        <view class="week">
          <view class="weektop">{{ ttwo }}</view>
          <view class="weebottom">{{ now + 2 }}</view>
        </view>
        <view class="week">
          <view class="weektop">{{ tthree }}</view>
          <view class="weebottom">{{ now + 3 }}</view>
        </view>
      </view>
    </view>
    <view class="testweek">
      <view class="font">考试周</view>
      <view class="countdown"
        ><text class="ca"> 还剩 </text> <text class="cb">{{ ksday - 2 }}天</text></view
      >
    </view>
    <view class="holiday">
      <div class="hoconcent">教师节</div>
      <div class="hocountdown">
        <!-- <u-count-down :timestamp="100000" format="DD天"></u-count-down> -->
        {{ jsday - 2 }}天
      </div>
    </view>
    <view class="guoqing">
      <div class="hoconcent">国庆节</div>
      <div class="hocountdown">{{ gqday - 2 }}天</div>
    </view>
    <view class="shengdan">
      <div class="hoconcent">青年节</div>
      <div class="hocountdown">{{ qnday - 2 }}天</div>
    </view>
  </view>
</template>

<style scoped lang="scss">
.all {
  width: 100%;
  position: relative;
  background-color: #d9f3f4;
  clear: both;
  .top {
    width: 712.5rpx;
    height: 400rpx;
    position: absolute;
    top: 20rpx;
    left: 18.75rpx;
    padding: 20rpx;
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
    clear: both;
    .shownow {
      width: 675rpx;
      height: 85rpx;
      border-radius: 20px;
      margin: 0 auto;
      background-color: #9cdeda;
      color: #d9f3f4;
      font-size: 50rpx;
      text-align: center;
      line-height: 85rpx;
    }
  }
  .daynum {
    padding-top: 70rpx;
    display: flex;
    flex-wrap: wrap;
    .week {
      width: 14%;
      display: flex;
      flex-direction: column;
      .weektop {
        margin: 0 auto;
        font-family: SourceHanSansCN-Regular;
        font-size: 30rpx;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 0px;
        color: #c6c6c9;
      }
      .weebottom {
        margin: 0 auto;
        padding-top: 80rpx;
        font-family: SourceHanSansCN-Regular;
        font-size: 55rpx;
        font-weight: normal;
        font-stretch: normal;
        line-height: 16px;
        letter-spacing: 0px;
        color: #838384;
        z-index: 3;
      }
      .white {
        color: #fff;
      }
    }
  }
  .testweek {
    width: 712.5rpx;
    height: 200rpx;
    display: flex;
    justify-content: space-between;
    position: absolute;
    padding: 20rpx 10rpx;
    border-radius: 20px;
    top: 450rpx;
    left: 18.75rpx;
    background-color: #fff;
    .font {
      padding: 30rpx 0 0 20rpx;
      font-size: 60rpx;
      font-weight: 500;
    }
    .countdown {
      display: flex;
      padding-top: 30rpx;
      padding-right: 30rpx;

      .ca {
        margin-top: 25rpx;
        margin-left: 10rpx;
      }

      .cb {
        font-size: 30px;
      }
    }
  }
  .holiday {
    width: 712.5rpx;
    height: 100rpx;
    display: flex;
    padding: 20rpx 30rpx;
    justify-content: space-between;
    position: absolute;
    top: 680rpx;
    border-radius: 15px;
    left: 18.75rpx;
    background-color: #f8f5f6;
    .hoconcent {
      font-size: 40rpx;
    }
    .hocountdown {
      padding-right: 15rpx;
      font-size: 20px;
      ::v-deep u-count-down {
        font-size: 20px;
      }
    }
  }
}
.line {
  width: 712.5rpx;
  height: 1px;
  position: fixed;
  top: 270rpx;
  left: 0rpx;
  margin-left: 18.75rpx;
  background-color: #86eded;
}
.active {
  width: 100rpx;
  height: 100rpx;
  background-color: #97dcdc;
  position: fixed;
  top: 280rpx;
  left: 320rpx;
  border-radius: 50rpx;
  // z-index: -1;
}

.shengdan {
  width: 712.5rpx;
  height: 100rpx;
  display: flex;
  padding: 20rpx 30rpx;
  justify-content: space-between;
  position: absolute;
  top: 830rpx;
  border-radius: 15px;
  left: 18.75rpx;
  background-color: #f8f5f6;
  .hoconcent {
    font-size: 40rpx;
  }
  .hocountdown {
    padding-right: 15rpx;

    font-size: 20px;
  }
}
.guoqing {
  width: 712.5rpx;
  height: 100rpx;
  display: flex;
  padding: 20rpx 30rpx;
  justify-content: space-between;
  position: absolute;
  top: 980rpx;
  border-radius: 15px;
  left: 18.75rpx;
  background-color: #f8f5f6;
  .hoconcent {
    font-size: 40rpx;
  }
  .hocountdown {
    padding-right: 15rpx;

    font-size: 20px;
  }
}
</style>
