<template>
  <view class="page">
    <view class="page-body">
      <view class="page-section page-section-gap">
        <map
          :style="{ height: screenHeight + 'px' }"
          :latitude="latitude"
          :longitude="longitude"
          :markers="covers"
        >
        </map>
      </view>
    </view>
  </view>
</template>

<script setup>
const id = 0
const title = 'map'
const latitude = 40.686991
const longitude = 114.85564
const covers = [
  {
    latitude: 40.686991,
    longitude: 114.85564,
    title: 'Covers',
    // iconPath: '../../static/images/locate.png',
  },
  {
    latitude: 39.9,
    longitude: 116.39,
    iconPath: '../../../static/location.png',
  },
]
const { screenHeight } = uni.getSystemInfoSync()
</script>

<style lang="scss" scoped>
map {
  width: 100%;
}
</style>
