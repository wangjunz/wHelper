<template>
  <view class="concent">
    <view class="item" v-for="item in 8" :key="item">
      <navigator
        url="../static/navicon/daohang.png"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <image src="@/static/navicon/daohang.png" mode="scaleToFill" />
        <view class="font">四六</view>
      </navigator>
    </view>
  </view>
</template>

<style scoped lang="scss">
.concent {
  display: flex;
  flex-wrap: wrap;
  margin-left: 70rpx;
  margin-top: 30rpx;
  //    background-color: aqua;
  .font {
    font-size: 15px;
    padding-left: 15rpx;
  }
}

.item {
  width: 25%;
  display: flex;
  flex-direction: column;
}

.item image {
  width: 80rpx;
  height: 80rpx;
}

.item text {
  margin-top: 17rpx;
  width: 28rpx;
  height: 22rpx;
  letter-spacing: 0;
}
</style>
