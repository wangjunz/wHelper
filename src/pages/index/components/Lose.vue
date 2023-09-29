<template>
  <view class="lose">
    <image
      src="https://img-blog.csdnimg.cn/ce00302234da4840af615827d69d415d.png"
      mode="scaleToFill"
    />
    <div class="item" v-for="item in loseData" :key="item.id">
      <div class="img">
        <image class="imgconcent" :src="item.img" mode="scaleToFill" />
      </div>
      <div class="concent">
        <div class="name"><text>拾到人：</text>{{ item.name }}</div>
        <div class="telephone"><text>电话：</text>{{ item.telephone }}</div>
        <div class="remark"><text> 备注：</text>{{ item.remark }}</div>
      </div>
    </div>
  </view>
</template>

<script setup>
import { ref } from 'vue'
const loseData = ref({})
uniCloud
  .callFunction({
    name: 'Lose',
  })
  .then((res) => {
    loseData.value = res.result.data
    // console.log(loseData)
    // console.log(loseData.value)
  })
</script>

<style scoped lang="scss">
.lose {
  width: 712.5rpx;
  // height: 166px;
  background-color: #f1f5fd;
  border-radius: 5px;
  // border: 1px solid #666;

  margin: 40rpx auto;
  image {
    width: 300rpx;
    height: 100rpx;
    opacity: 0.7;
  }
  .item {
    width: 351px;
    height: 166px;
    padding: 20rpx 0 20rpx 20rpx;
    display: flex;
    background-color: #f1f5fd;
    border-radius: 5px;
    border: 1px solid #666;
    margin-bottom: 20rpx;
    .img {
      width: 240rpx;
      height: 290rpx;
      border: 1px solid #666;
      margin-right: 30rpx;
      .imgconcent {
        width: 100%;
        height: 100%;
      }
    }
    .concent {
      width: 330rpx;
      padding-left: 15rpx;
      .telephone {
        padding-top: 10rpx;
      }
      .remark {
        padding-top: 10rpx;
      }
    }
  }
}
text {
  font-family: SourceHanSansCN-Regular;
  font-size: 28rpx;
  font-weight: 700;
  font-stretch: normal;
  line-height: 16rpx;
  letter-spacing: 0rpx;
  color: #333333;
}
</style>
