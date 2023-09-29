// 常用日期工具集合
// 1、获取当前日期
// 2、获取当前日期时间
// 3、获取今天是星期几
// 4、获取时间戳
// 5、获取昨天
// 6、获取昨天是星期几
// 7、获取明天
// 8、获取5天前
// 9、获取10天后
// 10、获取最近七天的日期(默认倒序)
// 11、获取最近七天的日期(顺序)
// 12、计算两个日期相隔天数
// 13、计算两个时间差，返回天小时分钟
// 14、获得上周周一和周日的日期
// 15、获得本周周一和周日的日期
// 16、日期时间转换为几秒/几分/几小时/几天前

let config = {
	seperator:"-"
}

//1、获取当前日期
const getToday = (seperator)=>{
	return parseDateToString(new Date(),seperator)
}
//2、获取当前日期时间
const getTodayTime = (seperator)=>{
	return parseDateTimeToString(new Date(),seperator)
}

//3、返回的周几 ：星期一
const getWeekDay = (dateStr)=>{
	let date = new Date()
	if(dateStr){
		 date = new Date(dateStr)
	}
	const day = date.getDay()
	const days = ['日', '一', '二', '三', '四', '五', '六']
	return `星期${days[day]}`   
}

//4、获取今天时间戳
const getCurrentTime = () => new Date().getTime()

//5、获取昨天
const getYesterday = ()=>{
	return getData(-1)
}

//6、获取明天
const getTomorrow = ()=>{
	return getData(1)
}

//7、获取几天前/几天后的日期
const getData = (day,seperator)=>{
	if(!seperator) seperator = config.seperator
    var today=new Date()
    var targetday=today.getTime() +1000*60*60*24* day
    today.setTime(targetday)
    var tYear=today.getFullYear()
    var tMonth=today.getMonth()
    var tDate=today.getDate()
    tMonth=addDate0(tMonth+1)
    tDate=addDate0(tDate)
    return tYear + seperator + tMonth+ seperator +tDate
}

//8、返回最近七天的日期
const getLast7Day = (orderBy)=>{
	let days = [];
	for(let i=0; i<=24*6;i+=24){		//今天加上前6天
		let dateItem=new Date(new Date().getTime() - i * 60 * 60 * 1000);	//使用当天时间戳减去以前的时间毫秒（小时*分*秒*毫秒）
		let y = dateItem.getFullYear();	//获取年份
		let m = dateItem.getMonth() + 1;	//获取月份js月份从0开始，需要+1
		let d= dateItem.getDate();	//获取日期
		m = addDate0(m);	//给为单数的月份补零
		d = addDate0(d);	//给为单数的日期补零
		let valueItem= y + '-' + m + '-' + d;	//组合
		days.push(valueItem);	//添加至数组
	}
	//console.log('最近七天日期：',days);
	if(orderBy=='asc'){
		return days.reverse()
	}
	return days;		
}



//9、计算两个日期相隔天数
const dateDiff = (sDate1, sDate2) => {
	//sDate1=开始时间
	//sDate2=对比时间
	var aDate, oDate1, oDate2, iDays;
	aDate = sDate1.split("-");
	oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);  //转换为yyyy-MM-dd格式
	aDate = sDate2.split("-");
	oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
	iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
	return iDays + 1;  //返回相差天数
}

//10、计算两个时间差  返回天小时分钟
function timeDiff(begin_time, end_time){
  //年月日时分秒转换为时间戳
  let beginTime = (new Date(begin_time).getTime()) / 1000;
  let endTime = (new Date(end_time).getTime()) / 1000;
  var starttime = ''
  var endtime = ''
  if (beginTime < endTime) {
    starttime = beginTime;
    endtime = endTime;
  } else {
    starttime = endTime;
    endtime = beginTime;
  }
  //计算天数
  var timediff = endtime - starttime;
  var days = parseInt(timediff / 86400);
  //计算小时数
  var remain = timediff % 86400;
  var hours = parseInt(remain / 3600);
  //计算分钟数
  var remain = remain % 3600;
  var mins = parseInt(remain / 60);
  //计算秒数
  var secs = remain % 60;
  //返回结果
  var res = days + '天' + hours + '小时' + mins + '分' + secs + '秒';
  return res;
}

//11、获得上周周一和周日的日期
function getLastWeekData() {
	let lastweek = {};
	let now = new Date(); //当前日期
	let nowDayOfWeek = now.getDay(); //今天本周的第几天
	let nowYear = now.getYear(); //当前年
	nowYear += (nowYear < 2000) ? 1900 : 0; //
	let nowDay = now.getDate(); //当前日
	let nowMonth = now.getMonth(); //当前月
	lastweek.start_date = parseDateToString(new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 6));
	lastweek.end_date = parseDateToString(new Date(nowYear, nowMonth, nowDay - nowDayOfWeek - 0));
	console.log('获得上周周一和周日的日期 ：',lastweek);
	return lastweek
}


//12、获得本周周一和周日的日期
function getThisWeekData() { 
	let thisweek = {};
	let now = new Date(); //当前日期
	let nowDayOfWeek = now.getDay(); //今天本周的第几天
	let nowDay = now.getDate(); //当前日
	let nowYear = now.getYear(); //当前年
	nowYear += (nowYear < 2000) ? 1900 : 0; //
	let nowMonth = now.getMonth(); //当前月
	thisweek.start_date = parseDateToString(new Date(nowYear, nowMonth, nowDay - nowDayOfWeek+1));
	thisweek.end_date = parseDateToString(new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek)));
	console.log('获得上周周一和周日的日期 ：',thisweek);
	return thisweek
}

//13、日期时间转换为几秒/几分/几小时/几天前
function getFriendlyDate(timestamp) {
	var formats = {
		'year': '%n% 年前',
		'month': '%n% 月前',
		'day': '%n% 天前',
		'hour': '%n% 小时前',
		'minute': '%n% 分钟前',
		'second': '%n% 秒前',
	};

	var now = Date.now();
	var seconds = Math.floor((now - timestamp) / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	var years = Math.floor(months / 12);

	var diffType = '';
	var diffValue = 0;
	if (years > 0) {
		diffType = 'year';
		diffValue = years;
	} else {
		if (months > 0) {
			diffType = 'month';
			diffValue = months;
		} else {
			if (days > 0) {
				diffType = 'day';
				diffValue = days;
			} else {
				if (hours > 0) {
					diffType = 'hour';
					diffValue = hours;
				} else {
					if (minutes > 0) {
						diffType = 'minute';
						diffValue = minutes;
					} else {
						diffType = 'second';
						diffValue = seconds === 0 ? (seconds = 1) : seconds;
					}
				}
			}
		}
	}
	return formats[diffType].replace('%n%', diffValue);
}


//14、时间戳转换为时间
const parseTimestampToDate = ()=>{
	return new Date(time)
}
//15、时间字符串转换为时间
const parseStringToDate = (dateStr)=>{
	return new Date(dateStr)
}
//16、时间转换为时间字符串
const parseDateTimeToString = (date,seperator) => {
  if(!seperator) seperator = config.seperator
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join(seperator) + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

//17、日期转换为日期字符串
function parseDateToString(date,seperator) {
	if(!seperator) seperator = config.seperator
	let myyear = date.getFullYear();
	let mymonth = date.getMonth() + 1;
	let myweekday = date.getDate();
	if (mymonth < 10) {
		mymonth = "0" + mymonth;
	}
	if (myweekday < 10) {
		myweekday = "0" + myweekday;
	}
	return (myyear + seperator + mymonth + seperator + myweekday);
}


const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
	
//给日期加0
function addDate0(time) {
	if (time.toString().length == 1) {
		time = '0' + time.toString();
	}
	return time;
}

export default {
	getToday,
	getTodayTime,
	getWeekDay,
	getCurrentTime,
	getYesterday,
	getTomorrow,
	getData,
	getLast7Day,
	
	dateDiff,
	timeDiff,
	getLastWeekData,
	getThisWeekData,
	getFriendlyDate,
	
	parseTimestampToDate,
	parseStringToDate,
	parseDateTimeToString,
	parseDateToString
}	