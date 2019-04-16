



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
//  function opendw()
//  {
//
// $("#sdwa").css("display","none");
// $("#sdwa1").css("display","block");
// api.toast({
//     msg: '开始定位',
//     duration: 2000,
//     location: 'middle'
// });
// console.log(1);
// $api.setStorage('sy_uid',1);
//   getLocation3(trace_interval, trace_accuracy, trace_filter);
//  }
//
//  function opendw1()
//  {
//
// $("#sdwa").css("display","block");
// $("#sdwa1").css("display","none");
// api.toast({
//     msg: '结束定位',
//     duration: 2000,
//     location: 'middle'
// });
// $api.rmStorage('sy_uid');
//   getLocation3(trace_interval, trace_accuracy, trace_filter);
// //api.stopLocation();
// // var reportLocation = api.require('reportLocation');
// // reportLocation.stopLocation();
//  }

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



            reportLocation.startLocation({
            accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
                filter: trace_filter, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
                autoStop: false,
                report: {
                    uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
                    url: functionURL + 'sandBoatScreen/update.json',
                    interval: 3,
                    type: 'post'
                }
            }, function(ret) {
                if (ret.status) {


                  api.getPrefs({
                   key: 'loginStatus'
                 }, function(retsa, err) {
                     //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
                     var val = retsa.value;
                     console.log("aaab"+val);
                     // console.log(JSON.stringify(val));
                     if (val =="") {
$api.rmStorage('sy_uid');
                      // reportLocation.stopLocation();

                     }
                  });


                  //  alert(JSON.stringify(ret));
                    console.log(JSON.stringify(ret));

                    var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);
                   // console.log("国测:" + JSON.stringify(bd09togcj02));
                    //国测局坐标转wgs84坐标
                    var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
                 //   console.log("GPS:" + JSON.stringify(gcj02towgs84));
                //  console.log(bd09togcj02);
                //   console.log($api.getStorage('ucsc06id'));

              if($api.getStorage('sy_uid')==1){
                    api.ajax({
                        url: functionURL + 'sandBoatScreen/update.json',
                        method: 'post',
                        dataType: 'text',
                        headers:
                        {

                          login_token:$api.getStorage('loginToken')
                        },
                        data: {
                            values: {
                                uid: $api.getStorage('ucsc06id'), //采砂船id,到时候传参数
                                longitude: gcj02towgs84[0], //经度
                                latitude: gcj02towgs84[1] //纬度
                            }
                        }
                    }, function(ret, err) {
                        if (ret) {
                            //alert(JSON.stringify(ret));
                             var date = new Date();
                            console.log(JSON.stringify(ret));
                        } else {
                            //alert(JSON.stringify(err));
                            console.log(JSON.stringify(err));
                            getLocation3(trace_interval, trace_accuracy, trace_filter);
                          //  resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
                        }
                    });
}
else {
  console.log("首页未定位");
}


                } else {
                    //alert(JSON.stringify(err));
                    console.log(JSON.stringify(err));
                    getLocation3(trace_interval, trace_accuracy, trace_filter);
                  //  resumeLocationJoin(); //获取定位信息错误
                }
            });

          //  api.startLocation({
          //      accuracy: trace_accuracy,// 间隔距离
          //      filter: trace_filter,//过滤精度
          //      autoStop: false
          //  }, function(ret, err) {
          //      if (ret && ret.status) {
          //         // alert(JSON.stringify(ret));
          //          console.log(JSON.stringify(ret));
          //          api.ajax({
          //              url: functionURL + 'sandBoatScreen/update.json',
          //           //url: 'http://47.96.165.26:8080/ncgctest/sandBoatScreen/update.json', //采砂船上传经纬度
          //              method: 'post',
          //              dataType: 'text',
          //              data: {
          //                  values: {
          //                      uid: $api.getStorage('ucsc06id'), //采砂船id,到时候传参数
          //                      longitude: ret.longitude, //经度
          //                      latitude: ret.latitude //纬度
          //                  }
          //              }
          //          }, function(ret, err) {
          //              if (ret) {
          //                  //alert(JSON.stringify(ret));
          //                  var date = new Date();
          //                 // console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
          //              } else {
          //                  //alert(JSON.stringify(err));
          //                  resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
          //              }
          //          });
          //      } else {
          //         // alert(JSON.stringify(err));
          //          resumeLocationJoin(); //GPS定位发生错误重启定位,如断网等
          //      }
          //  });
       }


//运沙船上传位置
       function getLocation4(trace_interval, trace_accuracy, trace_filter,uid) {

               //console.log("进入方法 getLocation3");
//alert("12333");

               var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
               var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
               var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
                var trace_interval = shijian_elc;
                var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
                var trace_filter = jingdu_elc; //过滤定位精度
                console.log(trace_filter);
                console.log(trace_accuracy);
                console.log(trace_interval);
console.log("1234f");
console.log(uid);
var uid=$api.getStorage('yx_uid');
//var uid=321;
                var reportLocation;
                reportLocation = api.require('reportLocation');
                reportLocation.startLocation({
                  accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
                    filter: trace_filter, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
                    autoStop: false,
                    report: {
                        uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
                         url: functionURL + 'boatPositionScreen/add.json',
                        interval: trace_interval,
                        type: 'post'
                    }
                }, function(ret) {
                    if (ret.status) {

                      api.getPrefs({
                       key: 'loginStatus'
                     }, function(retsa, err) {
                         //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
                         var val = retsa.value;
                         console.log("aaaa"+val);
                         // console.log(JSON.stringify(val));
                         if (val =="") {

                           reportLocation.stopLocation();

                         }
                      });




                               var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);
                              // console.log("国测:" + JSON.stringify(bd09togcj02));
                               //国测局坐标转wgs84坐标
                               var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
                            //   console.log("GPS:" + JSON.stringify(gcj02towgs84));

                        //alert(JSON.stringify(ret));
                        console.log(JSON.stringify(ret));
                        api.ajax({
                           url: functionURL + 'boatPositionScreen/add.json',
                            method: 'post',
                            dataType: 'text',
                            headers:
                            {

                              login_token:$api.getStorage('loginToken')
                            },
                            data: {
                                values: {
                                    waybillId: uid, //订单ID
                                    longitude: gcj02towgs84[0], //经度
                                    latitude: gcj02towgs84[1] //纬度
                                    // longitude: ret.loc.lon, //经度
                                    // latitude: ret.loc.lat //纬度
                                }
                            }
                        }, function(ret, err) {
                            if (ret) {
                              var date = new Date();
                              console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
                            } else {
                                //alert(JSON.stringify(err));
                                console.log(JSON.stringify(err));
                                 getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
                            }
                        });
                    } else {
                        //alert(JSON.stringify(err));
                        console.log(JSON.stringify(err));
                       getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
                    }
                });

              //  api.startLocation({
              //      accuracy: trace_accuracy,// 间隔距离
              //      filter: trace_filter,//过滤精度
              //      autoStop: false
              //  }, function(ret, err) {
              //      if (ret && ret.status) {
              //          //alert(JSON.stringify(ret));
              //          console.log(JSON.stringify(ret));
              //          api.ajax({
              //              url: functionURL + 'boatPositionScreen/add.json',
              //           //url: 'http://47.96.165.26:8080/ncgctest/sandBoatScreen/update.json', //采砂船上传经纬度
              //              method: 'post',
              //              dataType: 'text',
              //              data: {
              //                  values: {
              //                      waybillId: uid, //订单ID
              //                      longitude: ret.longitude, //经度
              //                      latitude: ret.latitude //纬度
              //                  }
              //              }
              //          }, function(ret, err) {
              //              if (ret) {
              //                  //alert(JSON.stringify(ret));
              //                  var date = new Date();
              //                  console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
              //              } else {
              //                  //alert(JSON.stringify(err));
              //                  getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
              //                  //resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
              //              }
              //          });
              //      } else {
              //          //alert(JSON.stringify(err));
              //          //resumeLocationJoin(); //GPS定位发生错误重启定位,如断网等
              //          getLocation4(trace_interval, trace_accuracy, trace_filter,uid);
              //      }
              //  });
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



 console.log(sid);
console.log("33");
 var xx;//运沙船经度
 var yy;
 var sx;//砂场经度
 var sy;
var scid='';//砂场ID

 var order_detail_el=document.getElementById("order_detail");
  api.ajax({
      url: functionURL + 'wayBillScreen/getListForApp.json',
      method: 'get',
      headers:
      {

        login_token:$api.getStorage('loginToken')
      },
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
            console.log(scid);
                    api.ajax({
                        url: functionURL + 'sandPlantScreen/find.json',
                        method: 'get',
                        headers:
                        {

                          login_token:$api.getStorage('loginToken')
                        },
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

                            //  if(canConfirmBill(xx, xy, sx, sy))
                          //    {
                              arr_da();
                        //      }
                          //    else {
                          //      api.toast({
                          //          msg: '未到达目标砂厂附近,暂时不能卸货',
                        //            duration: 2000,
                          //          location: 'middle'
                        //        });
                        //          console.log(123);
                        //        console.log(sid);




                            //  }
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

function getinfo_shj_sh(uid)

{
  console.log(uid);
  var xx;
  var xy;
  var sx;
  var sy;
  var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
  var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
  var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
   var trace_interval = shijian_elc;
   var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
   var trace_filter = jingdu_elc; //过滤定位精度
   //var reportLocation;

  reportLocation.startLocation({
    accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
      filter: trace_filter, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
      autoStop: false,
      report: {
          uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
   url: functionURL + 'wayBillScreen/getListForApp.json',
          interval: 10,
          type: 'post'
      }
  }, function(ret) {
      if (ret.status) {

 $api.setStorage('fpsdw'+uid,1);

        api.getPrefs({
         key: 'loginStatus'
       }, function(retsa, err) {

           var val = retsa.value;
           console.log("aaaa"+val);

           if (val =="") {



           }
        });



        var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);

        var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
        console.log(JSON.stringify(gcj02towgs84));
        sx=gcj02towgs84[0];
        sy=gcj02towgs84[1];


        api.ajax({
            url: functionURL + 'wayBillScreen/agreeUnload.json',
            dataType:'text',
            headers:
            {

              login_token:$api.getStorage('loginToken')
            },
            method: 'post',
            data: {
                values: {
                    waybillId: uid,
                      longitude:sx,
                      latitude:sy,
                    sandplantManager:$api.getStorage('usid')
                },
                files: {
                    file: 'fs://a.gif'
                }
            }
        }, function(ret, err) {
            if (ret) {

              if(ret==1){
                api.alert({
                     title: '修改成功'
                 });
$api.rmStorage('fpsdw'+uid);

console.log("卸货:"+uid);

// api.closeWin({
//     name: 'order_orderinfo_3'
// });
api.closeWin({
name: 'order_orderlist'
});

    setTimeout(function() {
              api.openWin({
                         name : 'order_orderlist',
                         url : '../order/orderlist.html',
                          reload:true,
                         slidBackEnabled:false,
                         delay:150,
                         animation:{
                           type:"fade",
                           subType:"from_bottom",
                       }

                     })
}, 300);

// setTimeout(function() {
//
//      api.execScript({
//          frameName:'order_ju',
//
//      script: 'closeju();'
//      });
// }, 500);
                  //    setTimeout(function() {
                  //    api.execScript({
                  //        frameName:'order_ju',
                   //
                  //    script: 'closeju();'
                  //    });
                  //  }, 300);

                   }

else {
  api.toast({
      msg: '距离太远,正在定位中',
      duration: 2000,
      location: 'middle'
  });

}


            }

        });




      }
  });


}

function getinfo_shjl(uid)
{
console.log(uid);
var xx;
var xy;
var sx;
var sy;
var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
 var trace_interval = shijian_elc;
 var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
 var trace_filter = jingdu_elc; //过滤定位精度
 var reportLocation;
 reportLocation = api.require('reportLocation');
reportLocation.startLocation({
  accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
    filter: trace_filter, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
    autoStop: false,
    report: {
        uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
 url: functionURL + 'wayBillScreen/getListForApp.json',
        interval: trace_interval,
        type: 'post'
    }
}, function(ret) {
    if (ret.status) {



      api.getPrefs({
       key: 'loginStatus'
     }, function(retsa, err) {
         //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
         var val = retsa.value;
         console.log("aaaa"+val);
         // console.log(JSON.stringify(val));
         if (val =="") {

          // reportLocation.stopLocation();

         }
      });

      //  alert(JSON.stringify(ret));
      //  console.log(JSON.stringify(ret));

      var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);
     // console.log("国测:" + JSON.stringify(bd09togcj02));
      //国测局坐标转wgs84坐标
      var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
      console.log(JSON.stringify(gcj02towgs84));
      sx=gcj02towgs84[0];
      sy=gcj02towgs84[1];
      api.ajax({
            url: functionURL + 'wayBillScreen/getListForApp.json',
            method: 'get',
            headers:
            {

              login_token:$api.getStorage('loginToken')
            },
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
              console.log(xx);
              console.log(xy);
              console.log(sx);
              console.log(sy);

        // if(canConfirmBill_s(xx, xy, sx, sy))
          //   {
                   $api.setStorage('shybut',0);

      //       }
          //   else {
          //   $api.setStorage('shybut',1);
          //     api.toast({
          //         msg: '与砂船距离过大,请移至距离砂船1000m范围内',
          //         duration: 2000,
          //         location: 'middle'
        //       });
          //   }

          }
          else
          {
               getinfo_shjl(uid);
          }
      });
    } else {

        console.log(JSON.stringify(err));
     getinfo_shjl(uid);
    }
});

  // api.startLocation({
  //            accuracy: trace_accuracy,// 间隔距离
  //            filter: trace_filter,//过滤精度
  //            autoStop: false
  //        }, function(ret, err) {
  //            if (ret && ret.status) {
  //                //alert(JSON.stringify(ret));
  //                console.log(JSON.stringify(ret));
  //                sx=ret.longitude;
  //                sy=ret.latitude;
  //                api.ajax({
  //                      url: functionURL + 'wayBillScreen/getListForApp.json',
  //                      method: 'get',
  //                      data: {
  //                          values: {
  //                              uid: uid
  //                          },
  //                          files: {
  //                              file: 'fs://a.gif'
  //                          }
  //                      }
  //                }, function(ret, err) {
  //                    if (ret) {
  //                      if( ret['data'].length>0){
  //                        var item = ret['data'][0];
  //                        xx=item['longitude']
  //                        xy=item['latitude'];
  //
  //                        }
  //                       //  console.log(xx);
  //                       //  console.log(xy);
  //                       //  console.log(sx);
  //                       //  console.log(sy);
  //
  //                       if(canConfirmBill_s(xx, xy, sx, sy))
  //                       {
  //                             $api.setStorage('shybut',0);
  //
  //                       }
  //                       else {
  //                       $api.setStorage('shybut',1);
  //                         api.toast({
  //                             msg: '与砂船距离过大,请移至距离砂船1000m范围内',
  //                             duration: 2000,
  //                             location: 'middle'
  //                         });
  //                       }
  //
  //                    }
  //                });
  //            } else {
  //                //alert(JSON.stringify(err));
  //                getinfo_shjl(uid)
  //                //resumeLocationJoin(); //GPS定位发生错误重启定位,如断网等
  //            }
  //        });

}




function reportLocationStart() {
      var reportLocation;
      reportLocation = api.require('reportLocation');
      reportLocation.startLocation({
          accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
          filter: 100, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
          autoStop: false,
          report: {
              uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
              url: "http://47.96.165.26:8080/ncgctest/boatPositionScreen/add.json",
              interval: 10,
              type: 'post'
          }
      }, function(ret) {
          if (ret.status) {
              alert(JSON.stringify(ret));
              console.log(JSON.stringify(ret));

              var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);
             // console.log("国测:" + JSON.stringify(bd09togcj02));
              //国测局坐标转wgs84坐标
              var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
              api.ajax({
                  url: 'http://47.96.165.26:8080/ncgctest/boatPositionScreen/add.json', //运砂船上传经纬度
                  method: 'post',
                  dataType: 'text',
                  headers:
                  {

                    login_token:$api.getStorage('loginToken')
                  },
                  data: {
                      values: {
                          waybillId: 295, //订单ID
                          longitude: gcj02towgs84[0], //经度
                          latitude: gcj02towgs84[1] //纬度
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


  function getLocation411() {

        console.log("进入方法 getLocation411");
  // alert("12333");

          var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
          var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
          var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
           var trace_interval = shijian_elc;
           var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
           var trace_filter = jingdu_elc; //过滤定位精度
  //          console.log(trace_filter);
  //          console.log(trace_accuracy);
  //          console.log(trace_interval);
  // console.log("1234f");
  // console.log(uid);
//  var uid=$api.getStorage('yx_uid');
var uid=$api.getStorage('yunshuid'+$api.getStorage('usid'));
console.log(uid);
  dmapong(uid);
//  var uid=321;
  // alert("12333");
  // alert(trace_filter);
  // alert(trace_interval);
          //  var reportLocation;
 //intervalId = setInterval( dmapong, 1000);
//clearInterval(intervalId);
        // var interval = setInterval(function () {    //代码B
        //        console.log("interval执行，当前value=" + value);
        //        if (value > 1) {
        //            temp = value;
        //            clearInterval(interval);    //终止循环
        //        }
        //    }, 200);


      }

function dmapong(uid)
{
  var juli_elc=$api.getStorage('juli_el'+$api.getStorage('usid'));
  var jingdu_elc=$api.getStorage('jingdu_el'+$api.getStorage('usid'));
  var shijian_elc=$api.getStorage('shijian_el'+$api.getStorage('usid'));
   var trace_interval = shijian_elc;
   var trace_accuracy = juli_elc+"m"; //定位最小间隔距离
   var trace_filter = jingdu_elc; //过滤定位精度
//          console.log(trace_filter);
//          console.log(trace_accuracy);
//          console.log(trace_interval);
// console.log("1234f");
// console.log(uid);
// var uid=$api.getStorage('yx_uid');

  // console.log(123);
  // console.log(trace_interval);
// if($api.getStorage('maptime')==1)
// {
//   api.toast({
//                            msg: '调用GPS 成功',
//                             duration: 2000,
//                          location: 'middle'
//   });
//  clearInterval(intervalId);
//
// }
// else{
  //reportLocation = api.require('reportLocation');
   reportLocation.startLocation({
     accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
       filter: trace_filter, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
       autoStop: false,
       report: {
           uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
            url: functionURL + 'boatPositionScreen/add.json',
           interval: trace_interval,
           type: 'post'
       }
   }, function(ret) {
     console.log(JSON.stringify(ret));
       if (ret.status) {





          var trace_filter_a = $api.getStorage('jingdu_el'+$api.getStorage('usid'));

$api.setStorage('maptime',1);//调用成功

         api.getPrefs({
          key: 'loginStatus'
        }, function(retsa, err) {
            //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
            var val = retsa.value;
            console.log("aaaa"+val);
            // console.log(JSON.stringify(val));
            if (val =="") {
$api.rmStorage('yx_uid');
            //  reportLocation.stopLocation();
$api.rmStorage('maptime');

$api.rmStorage('sy_uid');
            }
         });

                  var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);
                 // console.log("国测:" + JSON.stringify(bd09togcj02));
                  //国测局坐标转wgs84坐标
                  var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
               //   console.log("GPS:" + JSON.stringify(gcj02towgs84));
var uid=$api.getStorage('yx_uid');
           //alert(JSON.stringify(ret));
           console.log(getNowFormatDate());
           console.log(trace_interval);
           console.log(JSON.stringify(ret));
     console.log(uid);
           console.log($api.getStorage('maptime'));
           var accuracy=ret.accuracy;
           console.log(trace_filter_a);

           $api.setStorage('jdnum'+uid,gcj02towgs84[0]);
           $api.setStorage('wdnum'+uid,gcj02towgs84[1]);
           console.log("经度"+uid,gcj02towgs84[0]);
              console.log(uid);
            console.log("纬度"+uid,gcj02towgs84[1]);

           if(uid!=undefined)
           {
             console.log("进入运单");



            if(trace_filter_a==3000)
            {

console.log("不过滤添加");
              api.ajax({
                 url: functionURL + 'boatPositionScreen/add.json',
                  method: 'post',
                  dataType: 'text',
                  headers:
                  {

                    login_token:$api.getStorage('loginToken')
                  },
                  data: {
                      values: {
                          waybillId: uid, //订单ID
                          longitude: gcj02towgs84[0], //经度
                          latitude: gcj02towgs84[1] //纬度
                          // longitude: ret.loc.lon, //经度
                          // latitude: ret.loc.lat //纬度
                      }
                  }
              }, function(ret, err) {
                  if (ret) {


                    var date = new Date();
                    console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
                  } else {
                      //alert(JSON.stringify(err));
                      console.log(JSON.stringify(err));
                  //  getLocation411();
                  }
              });

            }
            else {
console.log("过滤添加11");
              if(accuracy<trace_filter_a){
                             api.ajax({
                                url: functionURL + 'boatPositionScreen/add.json',
                                 method: 'post',
                                 dataType: 'text',
                                 headers:
                                 {

                                   login_token:$api.getStorage('loginToken')
                                 },
                                 data: {
                                     values: {
                                         waybillId: uid, //订单ID
                                         longitude: gcj02towgs84[0], //经度
                                         latitude: gcj02towgs84[1] //纬度
                                         // longitude: ret.loc.lon, //经度
                                         // latitude: ret.loc.lat //纬度
                                     }
                                 }
                             }, function(ret, err) {
                                 if (ret) {


                                   var date = new Date();
                                   console.log(date.toLocaleTimeString() + "---" + JSON.stringify(ret));
                                 } else {
                                     //alert(JSON.stringify(err));
                                     console.log(JSON.stringify(err));
                                  //   getLocation411();
                                 }
                             });
              }

            }

         }
         else
         {
        //   reportLocation.stopLocation();

           //console.log("请选择运单");
console.log("选择运单");
 console.log($api.getStorage('sy_uid'));
           if($api.getStorage('sy_uid')!=undefined){

console.log("首页定位");

                 api.ajax({
                     url: functionURL + 'sandBoatScreen/update.json',
                     method: 'post',
                     dataType: 'text',
                     headers:
                     {

                       login_token:$api.getStorage('loginToken')
                     },
                     data: {
                         values: {
                             uid: $api.getStorage('ucsc06id'), //采砂船id,到时候传参数
                             longitude: gcj02towgs84[0], //经度
                             latitude: gcj02towgs84[1] //纬度
                         }
                     }
                 }, function(ret, err) {
                     if (ret) {
                         //alert(JSON.stringify(ret));
                          var date = new Date();
                         console.log(JSON.stringify(ret));
                     } else {
                         //alert(JSON.stringify(err));
                         console.log(JSON.stringify(err));
                        // getLocation411();
                       //  resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
                     }
                 });
           }
           else {
           console.log("首页未定位");
           }


         }


       } else {
           //alert(JSON.stringify(err));
           console.log(JSON.stringify(err));
        // getLocation411();
       }
   });

//}
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}

function closemap()
{
  var reportLocation;
  reportLocation = api.require('reportLocation');
reportLocation.stopLocation();
}



function getLocation311() {
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


// reportLocation = api.require('reportLocation');
         reportLocation2.startLocation({
         accuracy: 'hight_accuracy', //取值范围：1.battery_saving：低功耗模式(65) 2.device_sensors：仅设备（Gps）模式(165) 3.hight_accuracy：高精度模式(69)  对应android过滤定位精度
             filter: trace_filter, //（可选项）位置更新所需最小距离（单位米）  对应android 定位最小间隔距离
             autoStop: false,
             report: {
                 uid: '0123456789', //字符串类型；上报数据时携带的用户id（用于服务器端唯一标识用户）
                 url: functionURL + 'sandBoatScreen/update.json',
                 interval: 3,
                 type: 'post'
             }
         }, function(ret) {
             if (ret.status) {


               api.getPrefs({
                key: 'loginStatus'
              }, function(retsa, err) {
                  //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
                  var val = retsa.value;
                  console.log("aaab"+val);
                  // console.log(JSON.stringify(val));
                  if (val =="") {
$api.rmStorage('sy_uid');
                   // reportLocation.stopLocation();

                  }
               });


               //  alert(JSON.stringify(ret));
                 console.log(JSON.stringify(ret));

                 var bd09togcj02 = coordtransform.bd09togcj02(ret.loc.lon, ret.loc.lat);
                // console.log("国测:" + JSON.stringify(bd09togcj02));
                 //国测局坐标转wgs84坐标
                 var gcj02towgs84 = coordtransform.gcj02towgs84(bd09togcj02[0], bd09togcj02[1]);
              //   console.log("GPS:" + JSON.stringify(gcj02towgs84));
             //  console.log(bd09togcj02);
             //   console.log($api.getStorage('ucsc06id'));
var accuracy=ret.accuracy;
console.log(accuracy);
console.log(trace_filter);
           if($api.getStorage('sy_uid')!=undefined){

             if(accuracy<50){
                 api.ajax({
                     url: functionURL + 'sandBoatScreen/update.json',
                     method: 'post',
                     dataType: 'text',
                     headers:
                     {

                       login_token:$api.getStorage('loginToken')
                     },
                     data: {
                         values: {
                             uid: $api.getStorage('ucsc06id'), //采砂船id,到时候传参数
                             longitude: gcj02towgs84[0], //经度
                             latitude: gcj02towgs84[1] //纬度
                         }
                     }
                 }, function(ret, err) {
                     if (ret) {
                         //alert(JSON.stringify(ret));
                          var date = new Date();
                         console.log(JSON.stringify(ret));
                     } else {
                         //alert(JSON.stringify(err));
                         console.log(JSON.stringify(err));
                         getLocation311();
                       //  resumeLocationJoin(); //ajax提交发生错误重启定位,如网络错误等
                     }
                 });
               }
}
else {
console.log("首页未定位");
}


             } else {
                 //alert(JSON.stringify(err));
                 console.log(JSON.stringify(err));
              getLocation311();
               //  resumeLocationJoin(); //获取定位信息错误
             }
         });


    }
