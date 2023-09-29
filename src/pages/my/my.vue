<template>
  <view class="content">
    <view class="navback" @tap="goProfile">
      <navigator url="/pagesMember/Profile" open-type="navigate" hover-class="navigator-hover">
        <view class="personal">个人中心</view>
        <view class="avator">
          <image :src="dataList.img" mode="scaleToFill" />
        </view>
        <view class="name">{{ dataList.name }}</view>
        <view class="sign">未设置签名</view>
      </navigator>

      <view class="message">
        <div class="meitem">
          <div class="top">{{ dataList.credit }}</div>
          <div class="bottom">学分</div>
        </div>
        <div class="meitem">
          <div class="top">{{ dataList.profession }}</div>
          <div class="professionbottom" style="margin-left: 65rpx">专业</div>
        </div>
        <div class="meitem">
          <div class="top">{{ dataList.grade }}</div>
          <div class="gradebottom" style="margin-left: 15rpx">年级</div>
        </div>
      </view>
    </view>
    <view class="server">
      <view class="firsttitle">
        <text class="icon"></text>
        <text class="info">信息查询</text>
      </view>
      <view class="=firstserver">
        <view class="item">
          <navigator
            url="/pagesMember/SchoolCalendar"
            open-type="navigate"
            hover-class="navigator-hover"
          >
            <image src="../../static/navicon/icon_jintian.png" mode="scaleToFill" />
            <view class="font">校历</view>
          </navigator>
        </view>
        <view class="item" @tap="toCheckCET">
          <image src="../../static/navicon/icon_siliujibaoming-lv.png" mode="scaleToFill" />
          <view class="font">四六级</view>
        </view>
        <view class="item">
          <navigator
            url="/pagesMember/Alltimetable"
            open-type="navigate"
            hover-class="navigator-hover"
          >
            <image src="../../static/navicon/kebiaotongji-01.png" mode="scaleToFill" />
            <view class="font">课表</view>
          </navigator>
        </view>
        <view class="item">
          <navigator url="/pages/" open-type="navigate" hover-class="navigator-hover">
            <image src="../../static/navicon/icon_jintian.png" mode="scaleToFill" />
            <view class="font">四六级</view>
          </navigator>
        </view>
      </view>

      <view class="firsttitle">
        <text class="icon"></text>
        <text class="info">更多工具</text>
      </view>
      <view class="=firstserver">
        <view class="item">
          <navigator url="/pagesMember/Navigate" open-type="navigate" hover-class="navigator-hover">
            <image src="../../static/navicon/daohang.png" mode="scaleToFill" />
            <view class="font">导航</view>
          </navigator>
        </view>
        <view class="item">
          <navigator
            url="/pagesMember/Credentials"
            open-type="navigate"
            hover-class="navigator-hover"
          >
            <image src="../../static/navicon/dianzizhengzhaoheyan.png" mode="scaleToFill" />
            <view class="font">考证助手</view>
          </navigator>
        </view>
        <view class="item">
          <navigator url="/pages/test" open-type="navigate" hover-class="navigator-hover">
            <image src="../../static/navicon/icon_jintian.png" mode="scaleToFill" />
            <view class="font">四六</view>
          </navigator>
        </view>
        <view class="item">
          <navigator url="/pages/" open-type="navigate" hover-class="navigator-hover">
            <image src="../../static/navicon/icon_jintian.png" mode="scaleToFill" />
            <view class="font">四六级</view>
          </navigator>
        </view>
      </view>
    </view>
    <view class="nextclass">
      <view class="nctitle">
        <view class="tixing">课程提醒</view>
        <view>></view>
      </view>
      <view class="ncconcent">
        <view class="xiajieke">下节课</view>
        <view class="timeitem">
          <div class="have" v-if="finishRes">
            <view class="itemleft">
              <view class="name">{{ finishRes.name }}</view>
              <view class="time">{{ finishRes.time }}</view>
            </view>
            <view class="itemright">
              <text class="where">{{ finishRes.position }}</text>
            </view>
          </div>
          <div class="none" v-else>今日课程已上完</div>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/modules/user'
//下一课表
const timelist = ref([])
const time = ref()
time.value = parseInt(moment().format('Hmm'))
const week = moment().format('dddd')
const finishRes = ref([])
uniCloud
  .callFunction({
    name: 'TimeTable',
    data: { week },
  })
  .then((res) => {
    timelist.value = res.result.data[0].data

    const result = timelist.value.filter((item) => item.begin > time.value)

    finishRes.value = result[0]
    console.log(finishRes.value)
  })
//符合时间条件的数据

//判断是否登录
const userStore = useUserStore()
const dataList = ref({})
dataList.value = userStore.profile

const toCheckCET = () => {
  wx.navigateToMiniProgram({
    appId: 'wxa56afc785454c86b',
    success(res) {
      console.log(res)
      console.log('跳转小程序成功')
    },
    fail(err) {
      console.log('跳转小程序失败')
    },
  })
}
</script>

<style scoped lang="scss">
page {
  background-color: #f4f4f4;
}
.content {
  background-color: #f4f4f4;
  .navback {
    width: 750rpx;
    height: 482rpx;
    position: relative;
    background: -webkit-linear-gradient(
      top,
      rgb(104, 230, 163) 0%,
      rgba(135, 218, 140, 0.5) 66%,
      rgba(157, 156, 156, 0) 99%
    );
    .avator {
      width: 134rpx;
      height: 134rpx;
      position: absolute;
      top: 188rpx;
      left: 54rpx;
      overflow: hidden;
      border-radius: 67rpx;
      box-shadow: 0rpx 0rpx 39rpx 0rpx rgba(0, 0, 0, 0.29);
      border: solid 5rpx #ffffff;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .personal {
      position: absolute;
      top: 102rpx;
      left: 303rpx;
      height: 34rpx;
      font-family: SourceHanSansCN-Medium;
      font-size: 36rpx;
      font-weight: normal;
      font-stretch: normal;
      line-height: 55rpx;
      letter-spacing: 0rpx;
      color: #ffffff;
    }
    .name {
      position: absolute;
      top: 212rpx;
      left: 216rpx;
      font-family: SourceHanSansCN-Medium;
      font-size: 40rpx;
      font-weight: bold;
      font-stretch: normal;
      line-height: 43rpx;
      letter-spacing: 0rpx;
      color: #ffffff;
    }
    .sign {
      position: absolute;
      top: 276rpx;
      left: 216rpx;
      font-family: SourceHanSansCN-Medium;
      font-size: 20rpx;
      font-weight: normal;
      font-stretch: normal;
      line-height: 43rpx;
      letter-spacing: 0rpx;
      color: #ffffff;
      opacity: 0.9;
    }
    .message {
      width: 696rpx;
      height: 132rpx;
      position: absolute;
      top: 350rpx;
      left: 27rpx;
      background-color: #ffffff;
      box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.08);
      border-radius: 10rpx;
      box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      .meitem {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .top {
          font-size: 50rpx;
          color: #918e8e;
        }
      }
    }
  }
  .server {
    width: 750rpx;
    // height: 484rpx;
    margin-top: 26rpx;
    background-color: #fff;
    box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(153, 153, 153, 0.05);
    border-radius: 5rpx;
  }
  .firsttitle {
    padding: 30rpx 0 0 27rpx;
    // padding-left: 27rpx;
    .icon {
      width: 3rpx;
      height: 24rpx;
      margin-right: 10rpx;
      display: inline-block;
      background-color: #54bbaf;
    }
    .info {
      font-family: SourceHanSansCN-Medium;
      font-size: 36rpx;
      font-weight: normal;
      font-stretch: normal;
      line-height: 43rpx;
      letter-spacing: 0rpx;
      color: #918e8e;
    }
  }
  .firstserver {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    padding: 31rpx 0 0 88rpx;
    .item {
      width: 25%;
      display: flex;
      flex-direction: column;
      image {
        width: 74rpx;
        height: 74rpx;
      }
      .font {
        font-family: SourceHanSansCN-Medium;
        font-size: 24rpx;
        font-weight: normal;
        font-stretch: normal;
        line-height: 43rpx;
        letter-spacing: 0rpx;
        color: #333333;
      }
    }
  }
  .nextclass {
    width: 750rpx;
    height: 329rpx;
    margin-top: 37rpx;
    background-color: #ffffff;
    box-shadow: 0rpx 0rpx 14rpx 0rpx rgba(0, 0, 0, 0.05);
    border-radius: 5rpx;
    .nctitle {
      display: flex;
      justify-content: space-between;
      font-family: SourceHanSansCN-Medium;
      font-size: 36rpx;
      font-weight: normal;
      font-stretch: normal;
      line-height: 43rpx;
      letter-spacing: 0rpx;
      color: #918e8e;
      padding: 27rpx 26rpx 10rpx 26rpx;
      margin: 0 20rpx 20rpx 20rpx;
      // border-bottom:1px solid #918e8e;
    }
    .ncconcent {
      width: 696rpx;
      height: 217rpx;
      background-color: #f4f4f4f4;
      border-radius: 4rpx;
      margin: 0 auto;
      .xiajieke {
        font-family: SourceHanSansCN-Medium;
        font-size: 20rpx;
        font-weight: normal;
        font-stretch: normal;
        line-height: 43rpx;
        letter-spacing: 0rpx;
        color: #666666;
      }
      .timeitem {
        height: 80rpx;
        margin: 20rpx 45rpx;

        border-bottom: 1px solid rgb(216, 213, 213);
        .have {
          display: flex;
          justify-content: space-between;
        }
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
}
</style>
