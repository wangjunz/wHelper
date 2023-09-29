<script setup>
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="box">
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <!-- logo文字 -->
      <view class="logo">
        <text class="logo-image">wHelper</text>
        <text class="logo-text">实用 · 智能 · 便捷</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.box {
  clear: both;
  overflow: hidden;
}
/* 自定义导航条 */
.navbar {
  width: 750rpx;
  height: 50rpx;
  display: table;
  background-image: url(@/static/images/navigator_bg.png);
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
  z-index: 100;
  color: #f1f1f1;
  padding-bottom: 30rpx;
  .logo-image {
    font-style: italic;
    padding: 0 20rpx;
    font-size: 20px;
  }
  .logo-text {
    font-size: 13px;
  }
}
</style>
