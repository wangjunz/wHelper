<template>
  <view class="line">
    <view class="linetitle">近六日日花费</view>
    <view class="charts-box">
      <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
    </view>
  </view>
</template>

<script setup>
import moment from 'moment'
import { ref } from 'vue'

uniCloud
  .callFunction({
    name: 'Consume',
  })
  .then((re) => {
    res.series[0].name = re.result.data[0].name
    res.series[1].name = re.result.data[1].name
    res.series[0].data = re.result.data[0].data
    res.series[1].data = re.result.data[1].data
    chartData.value = JSON.parse(JSON.stringify(res))
    console.log(res)
  })

const chartData = ref({})
const opts = {
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
  padding: [15, 10, 0, 15],
  dataLabel: false,
  dataPointShape: false,
  enableScroll: false,
  legend: {},
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    gridType: 'dash',
    dashLength: 2,
    data: [
      {
        min: 0,
        max: 80,
      },
    ],
  },
  extra: {
    line: {
      type: 'curve',
      width: 2,
      activeType: 'hollow',
      linearType: 'custom',
      onShadow: true,
      animation: 'horizontal',
    },
  },
}

// x周数据
const data = new moment().format('D')
const mouth = new moment().format('M')

let res = {
  categories: [
    `${mouth}月${data - 5}号`,
    `${mouth}月${data - 4}号`,
    `${mouth}月${data - 3}号`,
    `${mouth}月${data - 2}号`,
    `${mouth}月${data - 1}号`,
    `${mouth}月${data}号`,
  ],
  series: [
    {
      name: '成交量A',
      linearColor: [
        [0, '#1890FF'],
        [0.25, '#00B5FF'],
        [0.5, '#00D1ED'],
        [0.75, '#00E6BB'],
        [1, '#90F489'],
      ],
      setShadow: [3, 8, 10, '#1890FF'],
      data: [15, 45, 15, 45, 15, 45],
    },
    {
      name: '成交量B',
      data: [55, 85, 55, 85, 55, 85],
    },
  ],
}
</script>

<style scoped lang="scss">
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.line {
  background-color: #f5f9fc;
  .linetitle {
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
