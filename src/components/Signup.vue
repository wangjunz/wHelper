<template>
  <view class="signup">
    <view class="img">
      <image src="../static/images/nothing.png" mode="scaleToFill" /><br />
      <text>您咋还没登录呢？</text>
    </view>
    <button @tap="goLogin">去登录</button>
  </view>
</template>

<script setup>
const goLogin = () => {
  uni.navigateTo({ url: '/pages/login/login' })
}
</script>

<style scoped lang="scss">
.signup {
  width: 750rpx;
  .img {
    margin-bottom: 30rpx;
    image {
      width: 400rpx;
      height: 400rpx;
      margin-left: 190rpx;
    }
    text {
      margin-left: 270rpx;
    }
  }
  button {
    width: 250rpx;
    height: 80rpx;
    border-radius: 20px;
    background-color: #00c4a1;
    color: aliceblue;
    font-weight: 400;
    line-height: 80rpx;
  }
}
</style>
