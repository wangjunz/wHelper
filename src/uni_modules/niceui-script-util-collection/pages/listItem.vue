<template>
	<view class="content_container">
		<uni-forms ref="baseForm" :modelValue="baseFormData">
			<h2 class="van-doc-demo-block__title">常用日期工具集合</h2>
			<uni-forms-item label="1、获取当前日期">
				<view class="v__value">{{getToday}}</view>
			</uni-forms-item>
			<uni-forms-item label="2、获取当前日期时间">
				<view class="v__value">{{getTodayTime}}</view>
			</uni-forms-item>
			<uni-forms-item label="3、获取今天是星期几">
				<view class="v__value">{{getWeekDay}}</view>
			</uni-forms-item>
			<uni-forms-item label="4、获取时间戳"><view class="v__value">{{getCurrentTime}}</view></uni-forms-item>
			<uni-forms-item label="5、获取昨天"><view class="v__value">{{getYesterday}}</view></uni-forms-item>
			<uni-forms-item label="6、获取昨天是星期几">
				<view class="v__value">{{getYesWeekDay}}</view>
			</uni-forms-item>
			<uni-forms-item label="7、获取明天"><view class="v__value">{{getTomorrow}}</view></uni-forms-item>
			<uni-forms-item label="8、获取5天前"><view class="v__value">{{getData5s}}</view></uni-forms-item>
			<uni-forms-item label="9、获取10天后"><view class="v__value">{{getData10p}}</view></uni-forms-item>
			<!-- <uni-forms-item label="8、获取最近七天的日期"><view class="v__value">{{getLast7Day}}</view></uni-forms-item> -->
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					<text>10、获取最近七天的日期(默认倒序)</text>
			     </view>
				 <view class="v__value">
					<view v-for="(it, index) in getLast7Day">
						<view :key="index" style="text-align: right;">{{it}}</view>
					</view>
				 </view>
			</view>
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					<text>11、获取最近七天的日期(顺序)</text>
			     </view>
				 <view class="v__value">
					<view v-for="(it, index) in getLast7DayAsc">
						<view :key="index" style="text-align: right;">{{it}}</view>
					</view>
				 </view>
			</view>
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					 <text>12、计算两个日期相隔天数</text>
				 </view>
			     <view class="v__value">
					<view style="color:#333;">2023-08-31</view>
					<view style="color:#333;">与2023-08-01</view>
					<view>相差：{{getDateDiff}}天</view>
				 </view>
			</view>
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					 <text>13、计算两个时间差，返回天小时分钟</text>
				 </view>
			     <view class="v__value">
					<view style="color:#333;">2022-02-28 10:57:12</view>
					<view style="color:#333;">与2022-02-18 16:25:40</view>
					<view>相差：{{getTimeDiff}}</view>
				 </view>
			</view>
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					<text>14、获得上周周一和周日的日期</text>
			     </view>
				 <view class="v__value">
					<view v-for="(it, index) in getLastWeekData">
						<view :key="index" style="text-align: right;">{{it}}</view>
					</view>
				 </view>
			</view>
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					<text>15、获得本周周一和周日的日期</text>
			     </view>
				 <view class="v__value">
					<view v-for="(it, index) in getThisWeekData">
						<view :key="index" style="text-align: right;">{{it}}</view>
					</view>
				 </view>
			</view>
			<view class="uni-forms-item is-direction-left" style="display: flex;position: relative;">
			     <view style="width:65px;justify-content:flex-start;" class="uni-forms-item__label">
					<text>16、日期时间转换为几秒/几分/几小时/几天前</text>
			     </view>
				 <view class="v__value">
					 <view style="color:#333;">2023-09-01 15:07:12</view>
					<view>转换后：{{getFriendlyDate}}</view>
				</view>	
			</view>
		</uni-forms>
	</view>
</template>
<script>
	import dateUtil from '../util/dateUtil.js'
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			getToday(){
				return dateUtil.getToday()
			},
			getTodayTime(){
				return dateUtil.getTodayTime()
			},
			getWeekDay(){
				return dateUtil.getWeekDay()
			},
			getCurrentTime(){
				return dateUtil.getCurrentTime()
			},
			getYesterday(){
				return dateUtil.getYesterday()
			},
			getYesWeekDay(){
				return dateUtil.getWeekDay(dateUtil.getYesterday())
			},
			getTomorrow(){
				return dateUtil.getTomorrow()
			},
			getData5s(){
				return dateUtil.getData(-5)
			},
			getData10p(){
				return dateUtil.getData(10)
			},
			getLast7Day(){
				return dateUtil.getLast7Day()
			},
			getLast7DayAsc(){
				return dateUtil.getLast7Day('asc')
			},
			getDateDiff(){
				return dateUtil.dateDiff('2023-08-31','2023-08-01')
			},
			getTimeDiff(){
				return dateUtil.timeDiff('2022-02-28 10:57:12', '2022-02-18 16:25:40')
			},
			getLastWeekData(){
				return dateUtil.getLastWeekData()
			},
			getThisWeekData(){
				return dateUtil.getThisWeekData()
			},
			getFriendlyDate(){
				var date = new Date('2023-09-01 15:07:12');
				return dateUtil.getFriendlyDate(date.getTime())
			}
		}
	}
</script>
<style lang="scss">
	@import './uni-forms-style.scss';
	/** 引入真实项目时，请将以下样式拷贝到全局样式uni.scss中，不需要每个页面都定义 ----start**/
	view,
	image,
	text {
	  box-sizing: border-box;
	  flex-shrink: 0;
	}
	
	#app {
	  width: 100vw;
	  height: 100vh;
	}
	
	.flex-row {
	  display: flex;
	  flex-direction: row;
	}
	
	.flex-col {
	  display: flex;
	  flex-direction: column;
	}
	
	.justify-start {
	  display: flex;
	  justify-content: flex-start;
	}
	
	.justify-center {
	  display: flex;
	  justify-content: center;
	}
	
	.justify-end {
	  display: flex;
	  justify-content: flex-end;
	}
	
	.justify-evenly {
	  display: flex;
	  justify-content: space-evenly;
	}
	
	.justify-around {
	  display: flex;
	  justify-content: space-around;
	}
	
	.justify-between {
	  display: flex;
	  justify-content: space-between;
	}
	
	.items-start {
	  display: flex;
	  align-items: flex-start;
	}
	
	.items-center {
	  display: flex;
	  align-items: center;
	}
	
	.items-end {
	  display: flex;
	  align-items: flex-end;
	}
	/** 引入真实项目时，请将以下样式拷贝到全局样式uni.scss中，不需要每个页面都定义 ----end**/
</style>
