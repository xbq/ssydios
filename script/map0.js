

var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
 // var trace_interval = "30s"; //定位最小间隔时间
 // var trace_accuracy = "100m"; //定位最小间隔距离
// var trace_filter = 10; //过滤定位精度
 var trace_interval = shijian_elc;
 var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
 var trace_filter = jingdu_elc; //过滤定位精度
// console.log(113);
// console.log(trace_filter);
// console.log(trace_accuracy);
// console.log(trace_interval);
 //彩砂船主定位
 function opendw()
 {

$("#sdwa").css("display","none");
$("#sdwa1").css("display","block");
api.toast({
    msg: '开始定位',
    duration: 2000,
    location: 'middle'
});
  getLocation3(trace_interval, trace_accuracy, trace_filter);
 }

 function opendw1()
 {

$("#sdwa").css("display","block");
$("#sdwa1").css("display","none");
api.toast({
    msg: '结束定位',
    duration: 2000,
    location: 'middle'
});
api.stopLocation();
 }

 function startAutoJoin() {
        //凡是涉及到偏好设置的内容，第一次都要给它一个默认值，然后再保存
        //1.保存偏好设置
      //  setPrefers();

        //2.同步读取偏好设置
    //    getPrefers();

        //3.带参数自动执行GPS定位
       getLocation3(trace_interval, trace_accuracy, trace_filter);

    }

   function getLocation3(trace_interval, trace_accuracy, trace_filter) {
     //console.log($api.getStorage('ucsc06ownerId'));
           //console.log("进入方法 getLocation3");
           var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
           var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
           var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
            var trace_interval = shijian_elc;
            var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
            var trace_filter = jingdu_elc; //过滤定位精度
            // console.log(trace_filter);
            // console.log(trace_accuracy);
            // console.log(trace_interval);

           api.startLocation({
               accuracy: trace_accuracy,// 间隔距离
               filter: trace_filter,//过滤精度
               autoStop: false
           }, function(ret, err) {
               if (ret && ret.status) {
                  // alert(JSON.stringify(ret));
                   console.log(JSON.stringify(ret));
                   api.ajax({
                       url: functionURL + 'sandBoatScreen/update.json',
                    //url: 'http://47.96.165.26:8080/ncgctest/sandBoatScreen/update.json', //采砂船上传经纬度
                       method: 'post',
                       dataType: 'text',
                       data: {
                           values: {
                               uid: $api.getStorage('ucsc06id'), //采砂船id,到时候传参数
                               longitude: ret.longitude, //经度
                               latitude: ret.latitude //纬度
                           }
                       }
                   }, function(ret, err) {
                       if (ret) {
                           //alert(JSON.stringify(ret));
                           var date = new Date();
                          // console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
                       } else {
                           //alert(JSON.stringify(err));
                           resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
                       }
                   });
               } else {
                  // alert(JSON.stringify(err));
                   resumeLocationJoin(); //GPS定位发生错误重启定位,如断网等
               }
           });
       }


//运沙船上传位置
       function getLocation4(trace_interval, trace_accuracy, trace_filter,uid) {

               //console.log("进入方法 getLocation3");


               var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
               var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
               var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
                var trace_interval = shijian_elc;
                var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
                var trace_filter = jingdu_elc; //过滤定位精度
                // console.log(trace_filter);
                // console.log(trace_accuracy);
                // console.log(trace_interval);

               api.startLocation({
                   accuracy: trace_accuracy,// 间隔距离
                   filter: trace_filter,//过滤精度
                   autoStop: false
               }, function(ret, err) {
                   if (ret && ret.status) {
                       //alert(JSON.stringify(ret));
                       console.log(JSON.stringify(ret));
                       api.ajax({
                           url: functionURL + 'boatPositionScreen/add.json',
                        //url: 'http://47.96.165.26:8080/ncgctest/sandBoatScreen/update.json', //采砂船上传经纬度
                           method: 'post',
                           dataType: 'text',
                           data: {
                               values: {
                                   waybillId: uid, //订单ID
                                   longitude: ret.longitude, //经度
                                   latitude: ret.latitude //纬度
                               }
                           }
                       }, function(ret, err) {
                           if (ret) {
                               //alert(JSON.stringify(ret));
                               var date = new Date();
                               console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
                           } else {
                               //alert(JSON.stringify(err));
                               getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
                               //resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
                           }
                       });
                   } else {
                       //alert(JSON.stringify(err));
                       //resumeLocationJoin(); //GPS定位发生错误重启定位,如断网等
                       getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
                   }
               });
           }

       //1.如果定位功能异常,重新执行自动定位
          //2.如果ajax请求网络异常
          function resumeLocation() {
              //api.stopLocation();//先停止GPS定位
              startAuto();
          }

          function resumeLocationJoin() {
              //api.stopLocation();//先停止GPS定位
              startAutoJoin();
          }

  //  function setPrefers() {
  //       //巡查轨迹
  //       //定位最小间隔时间  0s 5s 10s 30s
  //       //此参数暂时无效
  //       api.setPrefs({
  //           key: 'trace_interval',
  //           value: '30s' //先默认30秒
  //       });
  //       //定位最小间隔距离      0米 10米 50米 100米 500米
  //       api.setPrefs({
  //           key: 'trace_accuracy',
  //           value: '100m' //先默认500米
  //       });
  //       //过滤定位精度      0米 10米 30米 不过滤
  //       api.setPrefs({
  //           key: 'trace_filter',
  //           value: '10' //先默认10米
  //       });
  //       //照片大小         512K 1M 2M 原图
  //       api.setPrefs({
  //           key: 'trace_photoSize',
  //           value: '512K' //先默认512K
  //       });
  //   }
   //
  //   //同步读取偏好设置
  //   function getPrefers() {
  //       //异步返回结果：
  //       api.getPrefs({
  //           key: 'trace_interval',
  //           sync: true
  //       }, function(ret, err) {
  //           trace_interval = ret.value;
  //           console.log("trace_interval:" + trace_interval);
  //       });
   //
  //       api.getPrefs({
  //           key: 'trace_accuracy',
  //           sync: true
  //       }, function(ret, err) {
  //           trace_accuracy = ret.value;
  //           console.log("trace_accuracy:" + trace_accuracy);
  //       });
   //
  //       api.getPrefs({
  //           key: 'trace_filter',
  //           sync: true
  //       }, function(ret, err) {
  //           trace_filter = ret.value;
  //           console.log("trace_filter:" + trace_filter);
  //       });
   //
  //       api.getPrefs({
  //           key: 'trace_photoSize',
  //           sync: true
  //       }, function(ret, err) {
  //           trace_photoSize = ret.value;
  //           console.log("trace_photoSize:" + trace_photoSize);
  //       });
   //
  //       console.log("读取偏好设置成功...");
  //   }




    function canConfirmBill(fromLon, fromLat, toLon, toLat) {

    // console.log(fromLon);
    // console.log(fromLat);
    // console.log(toLon);
    // console.log(toLat);


           var flag = false;
           if (fromLon > 0 && fromLat > 0 && toLon > 0 && toLat > 0) {
               var jd = 102834.74258026089786013677476285; //(米/每经度)
               var wd = 111712.69150641055729984301412873; //(米/每纬度)

               var x = Math.abs((fromLon - toLon) * jd);
               var y = Math.abs((fromLat - toLat) * wd);

               var d = Math.sqrt((x * x + y * y)); //最终2点距离
               console.log(d);
               console.log("x:" + x + "---" + "y:" + y + "---" + "d:" + d + "---");
               if (d <= 2000)
                   flag = true;
               console.log("flag:" + flag);
               return flag;
           } else {
               console.log("flag:" + flag);
               return flag;
           }

       }


function getinfo_jl(sid)
{
//  console.log(sid);

 var xx;//运沙船经度
 var yy;
 var sx;//砂场经度
 var sy;
var scid='';//砂场ID

 var order_detail_el=document.getElementById("order_detail");
  api.ajax({
      url: functionURL + 'wayBillScreen/getListForApp.json',
      method: 'get',
      data: {
          values: {
              uid: sid
          },
          files: {
              file: 'fs://a.gif'
          }
      }
  }, function(ret, err) {

      if (ret) {
          if( ret['data'].length>0){
            var item = ret['data'][0];
            xx=item['longitude']
            xy=item['latitude'];
            scid=item['toDistrict'];
                    api.ajax({
                        url: functionURL + 'sandPlantScreen/find.json',
                        method: 'get',
                        data: {
                            values: {
                                uid: scid
                            },
                            files: {
                                file: 'fs://a.gif'
                            }
                        }
                    }, function(res, err) {
                        if (res) {

                          sx=res['longitude']
                          sy=res['latitude'];
                              // console.log(xx);
                              // console.log(xy);
                              // console.log(scid);
                              // console.log(sx);
                              // console.log(sy);
                              if(canConfirmBill(xx, xy, sx, sy))
                              {
                              arr_da();
                              }
                              else {
                                api.toast({
                                    msg: '未到达目标砂厂附近,暂时不能卸货',
                                    duration: 2000,
                                    location: 'middle'
                                });
                                getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
                              }
                        }
                    });


          }
      }
  });

}

//砂厂收货员收货
function canConfirmBill_s(fromLon, fromLat, toLon, toLat) {

// console.log(fromLon);
// console.log(fromLat);
// console.log(toLon);
// console.log(toLat);


       var flag = false;
       if (fromLon > 0 && fromLat > 0 && toLon > 0 && toLat > 0) {
           var jd = 102834.74258026089786013677476285; //(米/每经度)
           var wd = 111712.69150641055729984301412873; //(米/每纬度)

           var x = Math.abs((fromLon - toLon) * jd);
           var y = Math.abs((fromLat - toLat) * wd);

           var d = Math.sqrt((x * x + y * y)); //最终2点距离
           console.log(d);
           console.log("x:" + x + "---" + "y:" + y + "---" + "d:" + d + "---");
           if (d <= 1000)
               flag = true;
           console.log("flag:" + flag);
           return flag;
       } else {
           console.log("flag:" + flag);
           return flag;
       }

   }


function getinfo_shjl(uid)
{
console.log(uid);
var xx;
var xy;
var sx;
var sy;
  api.startLocation({
             accuracy: trace_accuracy,// 间隔距离
             filter: trace_filter,//过滤精度
             autoStop: false
         }, function(ret, err) {
             if (ret && ret.status) {
                 //alert(JSON.stringify(ret));
                 console.log(JSON.stringify(ret));
                 sx=ret.longitude;
                 sy=ret.latitude;
                 api.ajax({
                       url: functionURL + 'wayBillScreen/getListForApp.json',
                       method: 'get',
                       data: {
                           values: {
                               uid: uid
                           },
                           files: {
                               file: 'fs://a.gif'
                           }
                       }
                 }, function(ret, err) {
                     if (ret) {
                       if( ret['data'].length>0){
                         var item = ret['data'][0];
                         xx=item['longitude']
                         xy=item['latitude'];

                         }
                        //  console.log(xx);
                        //  console.log(xy);
                        //  console.log(sx);
                        //  console.log(sy);

                        if(canConfirmBill_s(xx, xy, sx, sy))
                        {
                              $api.setStorage('shybut',0);

                        }
                        else {
                        $api.setStorage('shybut',1);
                          api.toast({
                              msg: '与砂船距离过大,请移至距离砂船1000m范围内',
                              duration: 2000,
                              location: 'middle'
                          });
                        }

                     }
                 });
             } else {
                 //alert(JSON.stringify(err));
                 getinfo_shjl(uid)
                 //resumeLocationJoin(); //GPS定位发生错误重启定位,如断网等
             }
         });

}




function reportLocationStart() {
      reportLocation.startLocation({
          accuracy: 'battery_saving', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
          filter: 100, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
          autoStop: false,
          report: {
              uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
              url: "http://47.96.165.26:8080/ncgctest/boatPositionScreen/add.json

",
              interval: 10,
              type: 'post'
          }
      }, function(ret) {
          if (ret.status) {
              alert(JSON.stringify(ret));
              console.log(JSON.stringify(ret));
              api.ajax({
                  url: 'http://47.96.165.26:8080/ncgctest/boatPositionScreen/add.json

', //运砂船上传经纬度
                  method: 'post',
                  dataType: 'text',
                  data: {
                      values: {
                          waybillId: 295, //订单ID
                          longitude: ret.loc.lon, //经度
                          latitude: ret.loc.lat //纬度
                      }
                  }
              }, function(ret, err) {
                  if (ret) {
                      //alert(JSON.stringify(ret));
                      console.log(JSON.stringify(ret));
                  } else {
                      //alert(JSON.stringify(err));
                      console.log(JSON.stringify(err));
                      resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
                  }
              });
          } else {
              //alert(JSON.stringify(err));
              console.log(JSON.stringify(err));
              resumeLocationJoin(); //获取定位信息错误
          }
      });
  }
