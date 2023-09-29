<template>
  <view class="Credentials">
    <scroll-view scroll-y id="scroller">
      <view class="title">
        <view class="icon"></view>
        <view class="titlefont">考证助手</view>
      </view>
      <view class="desc"
        >大学期间可考的资格证书考证咨询，为同学们提供报考、成绩查询、准考证打印等资源信息。若相应网址链接变更请以变更的信息为准，该信息仅供参考。</view
      >
      <view class="concent">
        <view class="item" v-for="(item, index) in credList" :key="index" @tap="go(item.top)">
          <view class="itemfont">
            {{ item.name }}
          </view>
          <view class="rightarrow">
            <image src="../static/icon/右箭头.png" mode="scaleToFill" />
          </view>
        </view>
      </view>
      <view class="anchor">
        <view class="anitem" v-for="(item, index) in credList" :key="index">
          <view class="topic">{{ item.name }}</view>
          <view class="offweb">
            <view class="offwebfont">官网：</view>
            <view class="offweblink" @tap="copy(item.offweb)">{{ item.offweb }}</view>
          </view>
          <view class="signup" v-if="item.signup">
            <view class="signupfont">报名：</view>
            <view class="signuplink" @click="copy(item.signup)">{{ item.signup }}</view>
          </view>
          <view class="result" v-if="item.result">
            <view class="resultfont">成绩查询：</view>
            <view class="resultlink" @tap="copy(item.result)">{{ item.result }}</view>
          </view>
        </view>
      </view>
      <u-back-top :scroll-top="scrollTop" :mode="mode" :icon-style="iconStyle"></u-back-top>
    </scroll-view>
    <u-back-top :scroll-top="scrollTop"></u-back-top>
  </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'

//返回顶部
const scrollTop = ref(0)
onPageScroll((e) => {
  scrollTop.value = e.scrollTop
})
const credList = ref([])
//页面滚动动画
//获取页面栈
// const pages = getCurrentPages()
// //页面实例
// const pagesInstance = pages.at(-1)
// console.log(pagesInstance)
// onMounted(() => {
//   // 页面驱动动画
//   pagesInstance.animate(
//     '.Credentials', // 页面最外层view类名选择器
//     [{ backgroundColor: 'transparent' }, { backgroundColor: '#f8f8f8' }], // 关键帧信息
//     1000, // 动画持续时长
//     {
//       scrollSource: '#scroller', // scroll-view 的id选择器
//       startScrollOffset: 0, // 开始滚动偏移量
//       endScrollOffset: 50, // 停止滚动偏移量
//       timeRange: 1000, // 时间长度
//     },
//   )
// })
//页面下滑
const go = (top) => {
  uni.pageScrollTo({
    scrollTop: top,
    duration: 300,
  })
}
//获取数据
uniCloud
  .callFunction({
    name: 'Credentials',
  })
  .then((res) => {
    credList.value = res.result.data[0].data
    // console.log(credList.value)
  })
// console.log(credList)
//复制到粘贴板
const copy = (item) => {
  uni.setClipboardData({
    data: item,
  })
}
</script>

<style scoped lang="scss">
.Credentials {
  padding: 150rpx 50rpx;
  background-color: #1fbcb5;
  .title {
    display: flex;
    padding-bottom: 50rpx;
    .icon {
      width: 7rpx;
      height: 35rpx;
      margin-right: 20rpx;
      margin-top: 10rpx;
      border-radius: 5rpx;
      background-color: aliceblue;
    }
    .titlefont {
      color: aliceblue;
      font-weight: 600;
      font-size: 40rpx;
    }
  }
  .desc {
    color: white;
    padding-bottom: 50rpx;
  }
  .concent {
    width: 100%;
    // height: 1000rpx;
    border-radius: 9px;
    background-color: azure;
    .item {
      display: flex;
      line-height: 50rpx;
      margin: 0 30rpx;
      padding: 20rpx 0;
      justify-content: space-between;
      border-bottom: 1px solid #959ea1;

      .itemfont {
        color: #959ea1;
      }
      .rightarrow {
        image {
          width: 30rpx;
          height: 30rpx;
        }
      }
    }
  }
  .anchor {
    width: 100%;
    // height: 500rpx;

    color: #1fbcb5;

    margin-top: 50rpx;
    .anitem {
      padding: 25rpx;
      background-color: #dee6e9;
      margin-top: 20rpx;
      border-radius: 9px;
      .topic {
        font-weight: 500;
        font-size: 36rpx;
        padding-bottom: 35rpx;
      }
      .offweb {
        padding-bottom: 35rpx;

        .offweblink {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .signup {
        padding-bottom: 35rpx;
        .signuplink {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .result {
        padding-bottom: 35rpx;
        .resultlink {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
.aa {
  width: 20rpx;
  height: 20rpx;
  background-color: #dee6e9;
}
</style>
