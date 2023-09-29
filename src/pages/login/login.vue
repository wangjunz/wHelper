<script setup>
import { ref } from 'vue'
import { useUserStore } from '../../store/modules/user'

const userStore = useUserStore()

const studentId = ref()
const passWord = ref()

//提交验证，返回身份信息
const onTap = () => {
  if (studentId.value == 123 && passWord.value == 123) {
    uniCloud
      .callFunction({
        name: 'Wjz',
      })
      .then((res) => {
        userStore.setProfile(res.result.data[0])
        console.log(userStore.profile)
        uni.showToast({ title: '登录成功', icon: 'success' })
        setTimeout(() => {
          uni.switchTab({ url: '/pages/index/index' })
        }, 500)
      })
  }
}
</script>

<template>
  <view class="login">
    <view class="title">欢迎来到wHelper</view>
    <view class="line"></view>
    <view class="subtitle">wHelper，助力学业，前程无忧，一网打尽</view>
    <view class="form">
      <view class="studentid">
        <image src="../../static/icon/学员.png" mode="scaleToFill" />
        <input type="text" v-model="studentId" placeholder="请输入学号" />
      </view>
      <view class="password">
        <image src="../../static/icon/密码.png" mode="scaleToFill" />
        <input type="text" v-model="passWord" placeholder="请输入密码" />
      </view>
      <view class="toast">
        <image src="../../static/icon/感叹号.png" mode="scaleToFill" />
        <view class="text">未注册的学号首次登陆自动注册！</view>
      </view>
    </view>
    <view class="btn"></view>
    <button class="button" @tap="onTap">登录</button>
  </view>
  <view class="background">
    <image class="topright" src="../../static/background/矩形 1.png" mode="scaleToFill" />
    <image class="left" src="../../static/background/矩形 2.png" mode="scaleToFill" />
    <image class="bottomleft" src="../../static/background/矩形 3.png" mode="scaleToFill" />
    <image class="top" src="../../static/background/矩形 2 拷贝 2.png" mode="scaleToFill" />
  </view>
</template>

<style scoped lang="scss">
.background {
  z-index: -1;
  .left {
    width: 117rpx;
    height: 295rpx;
    position: fixed;
    top: 382rpx;
    right: 0rpx;
  }
  .top {
    width: 296rpx;
    height: 291rpx;
    position: fixed;
    top: 277rpx;
    left: 194rpx;
  }
  .topright {
    position: fixed;
    top: 0rpx;
    right: 0rpx;
  }
  .bottomleft {
    position: fixed;
    bottom: 0rpx;
    left: 0rpx;
  }
}
.login {
  .button {
    width: 641rpx;
    height: 89rpx;
    line-height: 89rpx;
    text-align: center;
    background-color: #53cac6;
    margin: 0 auto;

    box-shadow: 0rpx 3rpx 7rpx 0rpx rgba(83, 202, 198, 0.25);
    border-radius: 44rpx;
    font-family: SourceHanSansCN-Regular;
    font-size: 34rpx;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0rpx;
    color: #ffffff;
  }

  .title {
    margin-top: 162rpx;
    margin-left: 54rpx;
    font-family: SourceHanSansCN-Medium;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 2px;
    color: #000000;
  }
  .line {
    margin: 20rpx 0 0 54rpx;
    width: 172rpx;
    height: 7rpx;
    background-color: #939393;
    border-radius: 3rpx;
    opacity: 0.5;
  }
  .subtitle {
    margin: 21rpx 0 0 54rpx;
    font-family: SourceHanSansCN-Regular;
    font-size: 28rpx;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 3rpx;
    color: #939393;
  }
  .form {
    margin: 171rpx 56rpx 0 56rpx;
    .studentid {
      display: flex;
      border-bottom: 1px solid #d0d0d0;
      image {
        width: 50rpx;
        height: 50rpx;
        padding-bottom: 31rpx;
        padding-right: 26rpx;
      }
      input {
        padding-bottom: 30rpx;
        font-family: SourceHanSansCN-Regular;
        font-size: 32rpx;
        font-weight: 520;
        font-stretch: normal;
        line-height: 28rpx;
        letter-spacing: 0rpx;
        color: #c6c6c9;
      }
    }
  }
  .password {
    display: flex;
    padding-top: 68rpx;
    border-bottom: 1px solid #d0d0d0;
    image {
      width: 50rpx;
      height: 50rpx;
      padding-bottom: 31rpx;
      padding-right: 26rpx;
    }
    input {
      padding-bottom: 30rpx;
      font-family: SourceHanSansCN-Regular;
      font-size: 32rpx;
      font-weight: 520;
      font-stretch: normal;
      line-height: 28rpx;
      letter-spacing: 0rpx;
      color: #c6c6c9;
    }
  }
  .toast {
    margin: 37rpx 0 0 0;
    display: flex;
    image {
      width: 35rpx;
      height: 35rpx;
    }
    .text {
      font-family: SourceHanSansCN-Normal;
      font-size: 26rpx;
      font-weight: normal;
      font-stretch: normal;
      line-height: 31rpx;
      letter-spacing: 0rpx;
      color: #c6c6c9;
    }
  }
}
</style>
