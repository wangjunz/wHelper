<template>
  <view class="ring">
    <view class="ringtitle">{{ month }}月总花费</view>
    <view class="charts-box">
      <qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import moment from 'moment'

let chartData = ref({})
const dataList = ref({})

let res = {
  series: [
    {
      data: [
        { name: '一班', value: 50 },
        { name: '二班', value: 30 },
        { name: '三班', value: 20 },
        { name: '四班', value: 18 },
        { name: '五班', value: 8 },
      ],
    },
  ],
}
//云开发调值
uniCloud
  .callFunction({
    name: 'Cost',
  })
  .then((re) => {
    //调的值赋给默认值
    res.series[0].data = re.result.data
    chartData.value = JSON.parse(JSON.stringify(res))
    dataList.value = re.result
    opts.value.subtitle.name = re.result.total
  })
console.log(dataList.value.total)

const month = moment().format('M')

const opts = ref({
  rotate: false,
  rotateLock: false,
  color: [
    '#1890FF',
    '#91CB74',
    '#FAC858',
    '#EE6666',
    '#73C0DE',
    '#3CA272',
    '#FC8452',
    '#9A60B4',
    '#ea7ccc',
  ],
  padding: [5, 5, 5, 5],
  dataLabel: true,
  enableScroll: false,
  legend: {
    show: true,
    position: 'bottom',
    lineHeight: 25,
  },
  title: {
    name: '消费',
    fontSize: 15,
    color: '#666666',
  },
  subtitle: {
    name: 'jdv',
    fontSize: 25,
    color: '#7cb5ec',
  },
  extra: {
    ring: {
      ringWidth: 45,
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: true,
      borderWidth: 2,
      borderColor: '#FFFFFF',
      linearType: 'custom',
    },
  },
})
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
</style>
