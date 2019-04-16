function glyrandomS(tag) {
  var eFooterLis = $api.domAll('#footer_gly li');
  switch(tag)
      {
          case 0:

// api.closeFrame({
//     name: 'glyydtj'
// });
// api.closeFrame({
//     name: 'glyydcx'
// });
//
// api.closeFrame({
//     name: 'systemglyindex'
// });

$api.removeCls(eFooterLis[2], 'active');
$api.removeCls(eFooterLis[1], 'active');
$api.removeCls(eFooterLis[3], 'active');
$api.addCls( eFooterLis[0], 'active');
              api.openWin({
              name : 'glyindex',
              url : '../order/glyindex.html',
            //  reload:true,

            slidBackEnabled:false,
              animation:{
                type:"fade",
                subType:"from_bottom",
            }
                 })

          break;
          case 1:
          $api.removeCls(eFooterLis[2], 'active');
          $api.removeCls(eFooterLis[0], 'active');
          $api.addCls( eFooterLis[1], 'active');
		   $api.removeCls( eFooterLis[3], 'active');

          api.openFrame({
                name : 'glyydtj',
                url : '../order/glyydtj.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer_gly').offsetHeight
                  },

          });



          break;
          case 2:

          $api.removeCls(eFooterLis[1], 'active');
          $api.removeCls(eFooterLis[0], 'active');
          $api.addCls( eFooterLis[2], 'active');
	   $api.removeCls( eFooterLis[3], 'active');

          api.openFrame({
            name : 'glyydcx',
            url : '../order/glyydcx.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer_gly').offsetHeight
                  },

          });



          break;


		   case 3:

          $api.removeCls(eFooterLis[1], 'active');
          $api.removeCls(eFooterLis[0], 'active');
	   $api.removeCls( eFooterLis[2], 'active');
      $api.addCls( eFooterLis[3], 'active');
          api.openFrame({
            name : 'systemglyindex',
            url : '../system/systemglyindex.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer_gly').offsetHeight
                  },

          });



          break;

          default:
          break;
      }
}



function timeFormat(date) {
     if (!date || typeof(date) === "string") {
         this.error("参数异常，请检查...");
     }
     var y = date.getFullYear(); //年
    var m = date.getMonth() + 1; //月
     var d = date.getDate(); //日

     return y + "-" + m + "-" + d;
}

 function getday() {
	  var date=new Date();
   return timeFormat(date);
}


//本周第一天

function getFirstDayOfWeek (date) {
var date = new Date();
    var weekday = date.getDay()||7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7

    date.setDate(date.getDate()-weekday+1);//往前算（weekday-1）天，年份、月份会自动变化
    return timeFormat(date);
}

function getmonday()
{
// var	gday;
// var now = new Date();
// var nowTime = now.getTime() ;
// var day = now.getDay();
// var oneDayTime = 24*60*60*1000 ;
// var MondayTime = nowTime - (day-1)*oneDayTime ;
// var SundayTime =  nowTime + (7-day)*oneDayTime ;
// var monday = new Date(MondayTime);
// var sunday = new Date(SundayTime);
// var d = new Date(monday);
// gday=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
// //youWant=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
// return gday;
var date = new Date();
    var weekday = date.getDay()||7; //获取星期几,getDay()返回值是 0（周日） 到 6（周六） 之间的一个整数。0||7为7，即weekday的值为1-7

    date.setDate(date.getDate()-weekday+1);//往前算（weekday-1）天，年份、月份会自动变化
    return timeFormat(date);

}

//本月第一天
function getCurrentMonth(){
	var	gMonth;
 var date=new Date();
 date.setDate(1);
 var d = new Date(date);
 gMonth=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
 return gMonth;
}


//本年第一天
function getFirstDayOfYear() {

  var date=new Date();
   date.setDate(1);
   date.setMonth(0);
   return timeFormat(date);
}


//本季第一天
function getFirstDayOfSeason () {

	  var date=new Date();
    var month = date.getMonth();
     if(month <3 ){
         date.setMonth(0);
     }else if(2 < month && month < 6){
         date.setMonth(3);
    }else if(5 < month && month < 9){
         date.setMonth(6);
    }else if(8 < month && month < 11){
        date.setMonth(9);
   }
    date.setDate(1);
    return timeFormat(date);
 }
