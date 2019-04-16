//var functionURL="http://122.112.238.143:8080/ncgc/";
//var functionURL="http://47.96.165.26:8080/ncgctest/";
//var functionURLimg=functionURL.replace(/ncgctest\//, "");
var functionURL="http://122.112.238.143:8080/ncgc2/";
var functionURLimg=functionURL.replace(/ncgc2\//, "");

var  intervalId;
var  reportLocation;
var  reportLocation2;
  var uzgetuisdk = null;
  var clientid;
function openorder_a(cx)
{
    api.openWin({
  name : 'order_createrorder_ws',
  url : '../order/createrorder_ws.html',
  slidBackEnabled:false,
    hideHomeIndicator:true,
  //reload:true,
   pageParam: {id: cx},
      });

}
function randomS(tag) {
  var eFooterLis = $api.domAll('#footer li');
  switch(tag)
      {
          case 0:
// api.closeWin({
//     name: 'ordder_orderhistory'
// });
// api.closeWin({
//     name: 'system_index'
// });
api.closeFrame({
    name: 'order_orderhistory'
});
api.closeFrame({
    name: 'system_index'
});
api.closeFrame({
    name: 'systemtxl'
});
$api.removeCls(eFooterLis[3], 'active');
$api.removeCls(eFooterLis[2], 'active');
$api.removeCls(eFooterLis[1], 'active');
$api.addCls( eFooterLis[0], 'active');
              api.openWin({
              name : 'order_orderlist',
              url : '../order/orderlist.html',
            //  reload:true,
            //  delay:100,
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
          $api.removeCls(eFooterLis[3], 'active');
          // api.closeWin({
          //     name: 'order_orderlist'
          // });
          // api.closeWin({
          //     name: 'system_index'
          // });

          api.openFrame({
                name : 'order_orderhistory',
                url : '../order/orderhistory.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer').offsetHeight
                  },

          });

          // api.openWin({
          //     name : 'order_orderhistory',
          //     url : '../order/orderhistory.html',
          //     reload:true,
          //     delay:100,
          //       slidBackEnabled:false,
          //      animation:{
          //        type:"fade",
          //        subType:"from_bottom",
          //    }
          //
          //    })

          break;
          case 2:

          $api.removeCls(eFooterLis[1], 'active');
          $api.removeCls(eFooterLis[0], 'active');
          $api.addCls( eFooterLis[3], 'active');
            $api.removeCls(eFooterLis[2], 'active');
          // api.closeWin({
          //     name: 'order_orderlist'
          // });
          // api.closeWin({
          //     name: 'ordder_orderhistory'
          // });

          api.openFrame({
            name : 'system_index',
            url : '../system/index.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer').offsetHeight
                  },

          });

          // api.openWin({
          //     name : 'system_index',
          //     url : '../system/index.html',
          //     reload:true,
          //     delay:100,
          //       slidBackEnabled:false,
          //      animation:{
          //        type:"fade",
          //        subType:"from_bottom",
          //    }
          //
          //    })

          break;
          case 3:

          $api.removeCls(eFooterLis[1], 'active');
          $api.removeCls(eFooterLis[0], 'active');
          $api.addCls( eFooterLis[2], 'active');
            $api.removeCls(eFooterLis[3], 'active');

          api.openFrame({
            name : 'systemtxl',
            url : '../system/systemtxl.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer').offsetHeight
                  },

          });



          break;


          default:
          break;
      }
}

function randomS7(tag) {
  var eFooterLis = $api.domAll('#footer7 li');
  switch(tag)
      {
          case 0:

api.closeFrame({
    name: 'order_orderhistory'
});
api.closeFrame({
    name: 'system_index'
});
api.closeFrame({
    name: 'order_sd'
});
api.closeFrame({
    name: 'order_sd0'
});
$api.removeCls(eFooterLis[3], 'active');
$api.removeCls(eFooterLis[2], 'active');
$api.removeCls(eFooterLis[1], 'active');
$api.addCls( eFooterLis[0], 'active');
              api.openWin({
              name : 'order_orderlist7',
              url : '../order/orderlist7.html',
            //  reload:true,
            //  delay:100,
            slidBackEnabled:false,
              animation:{
                type:"fade",
                subType:"from_bottom",
            }
                 })

          break;
          case 1:
          $api.removeCls(eFooterLis[3], 'active');
          $api.removeCls(eFooterLis[2], 'active');
          $api.removeCls(eFooterLis[0], 'active');
          $api.addCls( eFooterLis[1], 'active');


          api.openFrame({
                name : 'order_orderhistory',
                url : '../order/orderhistory.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer7').offsetHeight
                  },

          });



          break;
          case 2:

          $api.removeCls(eFooterLis[1], 'active');
          $api.removeCls(eFooterLis[0], 'active');
              $api.removeCls(eFooterLis[2], 'active');
          $api.addCls( eFooterLis[3], 'active');


          api.openFrame({
            name : 'system_index',
            url : '../system/index.html',
              bounces: false,
              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer7').offsetHeight
                  },

          });


          break;

          case 3:

          $api.removeCls(eFooterLis[1], 'active');
          $api.removeCls(eFooterLis[0], 'active');
              $api.removeCls(eFooterLis[3], 'active');
          $api.addCls( eFooterLis[2], 'active');


          api.openFrame({
            name : 'order_sd',
            url : '../order/order_sd.html',
              bounces: false,

              rect: {
                      x: 0,
                      y: 0,
                      w: api.winWidth,
                      h:  api.winHeight-$api.dom('#footer7').offsetHeight
                  },

          });
          api.openFrame({
            name : 'order_sd0',
            url : '../order/order_sd0.html',

              rect: {
                      x: 0,
                      y: 70,
                      w: api.winWidth,
                      h:  api.winHeight-140
                  },

          });

          break;

          default:
          break;
      }
}
function fabu()
{
  //  api.sendEvent({
  //                name: 'longpress',
   //
  //            });

      api.openWin({

                 name : 'order_createorder',
                 url : '../order/createorder.html',
                      hideHomeIndicator:true,
                 slidBackEnabled:false,
                 reload:true,

         });

}

function t_today()
{
  var d = new Date();
  var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
 return str;

}


function t_today_aa(mm)
{
   var arr = mm.split("-");
   var newdt = arr[1]+"/"+arr[2];
 return newdt;

}
function add_time(t_time){
               var mm=t_time;
   var arr = mm.split("-");
   var newdt = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+1);
var   repnewdt = newdt.getFullYear() + "-" +   (newdt.getMonth()+1) + "-" + newdt.getDate();
return repnewdt;
  }

  function add_time_b(t_time){
                 var mm=t_time;
     var arr = mm.split("/");
     var newdt = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+1);
  var   repnewdt = newdt.getFullYear() + "-" +   (newdt.getMonth()+1) + "-" + newdt.getDate();
  return repnewdt;
    }

      function add_time_a(t_time){
                     var mm=t_time;
         var arr = mm.split("/");
         var newdt = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2]));
      var   repnewdt = newdt.getFullYear() + "-" +   (newdt.getMonth()+1) + "-" + newdt.getDate();
      return repnewdt;
        }


  function add_time_arr(t_time){
                 var mm=t_time;
     var arr = mm.split("-");
     var myArray=new Array();
     var newdt1 = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+1);
     var newdt2 = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+2);
     var newdt3 = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+3);
     var newdt4 = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+4);
     var newdt5 = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+5);
     var newdt6 = new Date(Number(arr[0]),Number(arr[1])-1,Number(arr[2])+6);
//  var   repnewdt = newdt.getFullYear() + "-" +   (newdt.getMonth()+1) + "-" + newdt.getDate();
myArray[0]=t_time;
myArray[1]=newdt1.getFullYear() + "-" +   (newdt1.getMonth()+1) + "-" + newdt1.getDate();
myArray[2]=newdt2.getFullYear() + "-" +   (newdt2.getMonth()+1) + "-" + newdt2.getDate();
myArray[3]=newdt3.getFullYear() + "-" +   (newdt3.getMonth()+1) + "-" + newdt3.getDate();
myArray[4]=newdt4.getFullYear() + "-" +   (newdt4.getMonth()+1) + "-" + newdt4.getDate();
myArray[5]=newdt5.getFullYear() + "-" +   (newdt5.getMonth()+1) + "-" + newdt5.getDate();
myArray[6]=newdt6.getFullYear() + "-" +   (newdt6.getMonth()+1) + "-" + newdt6.getDate();

  return myArray;
    }

function islogin(){

  api.getPrefs({
    key: 'loginStatus'
  }, function(ret, err) {
      //当偏好设置尚未设置或者曾设置后被移除后，返回值(ret.value)均为空。
      var val = ret.value;
      if (val && val != "") {
              //已登录

      } else {
        api.openWin({
                           name :'index',
                           url : '../../index.html',
                           slidBackEnabled:false,
                           reload:true,
                 })
      }
  });

}

function subexits_sz()
{
   $api.setStorage('webnetjt',0);
  $api.setStorage('glyjryda',0);
$api.setStorage('pqglyjryda',0);
$api.rmStorage('pianquid');
$api.rmStorage('pianqname');
//  $api.setStorage('usid',ret['userId']);//登录ID
//  $api.setStorage('usname',ret['userName']);//用户
//  $api.setStorage('uqx',ret['rightInfo']);//角色
//  $api.setStorage('ucsc06id',uid);//采沙船-管理员-采砂船ID

//$api.setStorage('ucsc06ownerId',ownerId);
//$api.setStorage('ucsc06name',ret['name']);采沙船name

//$api.getStorage('sandboatId')=ret['uid'];采沙船船主ID
//$api.getStorage('sandboatName')=ret['name'];采沙船船主name
//	$api.setStorage('uroles',ret['roles']);//角色name
//       $api.setStorage('yunshu',1);

//$api.setStorage('boatId',item['uid']);//运沙船
//$api.setStorage('boatName',item['name']);//
//  $api.rmStorage('Im_id_hz');
//$api.getStorage('yunshuid') 运输订单
//$api.setStorage('dy'+$api.getStorage('usid'),1);
// /$api.setStorage('shybut',0);收货员
//$api.setStorage('toDistrict',uid);//沙场
//$api.setStorage('toDistrictname',name);//沙场
//$api.getStorage('yunshuid'+$api.getStorage('usid'))
//api.stopLocation();
//$api.setStorage('yx_uid',uid);
//var reportLocation = api.require('reportLocation');
// var reportLocation = api.require('reportLocation');
//
// reportLocation.stopLocation();
//$api.setStorage('maptime',1);//调用gps
//$api.rmStorage('sy_uid');首页定位
//	$api.setStorage('s_jt',1);
//$api.rmStorage('dingdan');
api.execScript({
      name: 'root',
      frameName:'index_check',
script: 'closecheck();'
});
api.execScript({
      name: 'root',
script: 'closeroot();'
});

api.execScript({
  name:'order_orderinfo_3',
    frameName:'systemglyindex',

script: 'closeju();'
});

api.execScript({
        name:  'glylist',
script: 'hiddengroup();'
});

api.ajax({
    url: functionURL + 'sysUserScreen/logoutForApp.json',
    method: 'post',
    dataType:'text',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
        values: {
        user_id:$api.getStorage('usid')
        },
        files: {
            file: 'fs://a.gif'
        }
    }
}, function(ret, err) {
console.log(ret);

});

//$api.rmStorage('yunshuid'+$api.getStorage('usid'))
//$api.rmStorage('dy'+$api.getStorage('usid'));
$api.rmStorage('s_cid');//推送

//$api.rmStorage('yx_uid');
$api.rmStorage('sy_uid');
//setTimeout(function(){
// var reportLocation;
// reportLocation = api.require('reportLocation');
// reportLocation.stopLocation();
//},150)
//closemap();
$api.rmStorage('picturePath');
$api.rmStorage('mobileRemark');
$api.rmStorage('yunshuid'+$api.getStorage('usid'))
$api.rmStorage('dy'+$api.getStorage('usid'));
$api.rmStorage('yx_uid');
$api.rmStorage('leaderName2');
$api.rmStorage('loginToken');
$api.rmStorage('sy_daa');
$api.rmStorage('maptime');
$api.rmStorage('usid');
$api.rmStorage('usname');
$api.rmStorage('uqx');
$api.rmStorage('uroles');
$api.rmStorage('ucsc06id');
$api.rmStorage('ucsc06name');
$api.rmStorage('ucsc06tel');
$api.rmStorage('sandboatId');
$api.rmStorage('sandboatName');
$api.rmStorage('boatId');
$api.rmStorage('boatName');
$api.rmStorage('ucsc06ownerId');
$api.rmStorage('yunshuid');
$api.rmStorage('toDistrict');
$api.rmStorage('toDistrictname');
$api.rmStorage('fromDistrict');
$api.rmStorage('fromName');

  api.sendEvent({
      name: 'logoutSuccess'
  });
  //api.removePrefs移除登录状态
  api.removePrefs({
      key: 'loginStatus'
  });
//api.closeWin({name:'slide'});
  // api.closeSlidPane();

//   api.ajax({
//       url: functionURL + 'sysUserScreen/logoutForApp.json',
//       method: 'post',
//       data: {
//           values: {
// user_id:
//           },
//           files: {
//               file: 'fs://a.gif'
//           }
//       }
//   }, function(ret, err) {
//
//   });

  api.openWin({
                    name : 'root',
                    url : '../../index.html',
                     reload:true,
                    slidBackEnabled:false,
                    delay:150,
            	 			animation:{
            	 				type:"fade",
            	 				subType:"from_bottom",
            	 		}

                })
}


function subexits_szc()
{
  console.log("调用");
 $api.setStorage('webnetjt',0);
  $api.setStorage('glyjryda',0);
$api.setStorage('pqglyjryda',0);
$api.rmStorage('pianquid');
$api.rmStorage('pianqname');
//  $api.setStorage('usid',ret['userId']);//登录ID
//  $api.setStorage('usname',ret['userName']);//用户
//  $api.setStorage('uqx',ret['rightInfo']);//角色
//  $api.setStorage('ucsc06id',uid);//采沙船-管理员-采砂船ID

//$api.setStorage('ucsc06ownerId',ownerId);
//$api.setStorage('ucsc06name',ret['name']);采沙船name

//$api.getStorage('sandboatId')=ret['uid'];采沙船船主ID
//$api.getStorage('sandboatName')=ret['name'];采沙船船主name
//	$api.setStorage('uroles',ret['roles']);//角色name
//       $api.setStorage('yunshu',1);

//$api.setStorage('boatId',item['uid']);//运沙船
//$api.setStorage('boatName',item['name']);//
//  $api.rmStorage('Im_id_hz');
//$api.getStorage('yunshuid') 运输订单
//$api.setStorage('dy'+$api.getStorage('usid'),1);
// /$api.setStorage('shybut',0);收货员
//$api.setStorage('toDistrict',uid);//沙场
//$api.setStorage('toDistrictname',name);//沙场
//$api.getStorage('yunshuid'+$api.getStorage('usid'))
//api.stopLocation();
//$api.setStorage('yx_uid',uid);
//var reportLocation = api.require('reportLocation');
// var reportLocation = api.require('reportLocation');
//
// reportLocation.stopLocation();
//$api.setStorage('maptime',1);//调用gps
//$api.rmStorage('sy_uid');首页定位
//	$api.setStorage('s_jt',1);
//$api.rmStorage('dingdan');
api.execScript({
      name: 'root',
      frameName:'index_check',
script: 'closecheck();'
});
api.execScript({
      name: 'root',
script: 'closeroot();'
});
api.ajax({
    url: functionURL + 'sysUserScreen/logoutForApp.json',
    method: 'post',
    dataType:'text',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
        values: {
        user_id:$api.getStorage('usid')
        },
        files: {
            file: 'fs://a.gif'
        }
    }
}, function(ret, err) {
console.log(ret);

});

$api.rmStorage('yunshuid'+$api.getStorage('usid'))
$api.rmStorage('dy'+$api.getStorage('usid'));
$api.rmStorage('s_cid');//推送

$api.rmStorage('yx_uid');
$api.rmStorage('sy_uid');
//setTimeout(function(){
// var reportLocation;
// reportLocation = api.require('reportLocation');
// reportLocation.stopLocation();
//},150)
//closemap();
$api.rmStorage('picturePath');
$api.rmStorage('mobileRemark');
$api.rmStorage('leaderName2');
$api.rmStorage('loginToken');
$api.rmStorage('sy_daa');
$api.rmStorage('maptime');
$api.rmStorage('usid');
$api.rmStorage('usname');
$api.rmStorage('uqx');
$api.rmStorage('uroles');
$api.rmStorage('ucsc06id');
$api.rmStorage('ucsc06name');
$api.rmStorage('ucsc06tel');
$api.rmStorage('sandboatId');
$api.rmStorage('sandboatName');
$api.rmStorage('boatId');
$api.rmStorage('boatName');
$api.rmStorage('ucsc06ownerId');
$api.rmStorage('yunshuid');
$api.rmStorage('toDistrict');
$api.rmStorage('toDistrictname');
$api.rmStorage('fromDistrict');
$api.rmStorage('fromName');
  api.sendEvent({
      name: 'logoutSuccess'
  });
  //api.removePrefs移除登录状态
  api.removePrefs({
      key: 'loginStatus'
  });
//api.closeWin({name:'slide'});
  // api.closeSlidPane();

//   api.ajax({
//       url: functionURL + 'sysUserScreen/logoutForApp.json',
//       method: 'post',
//       data: {
//           values: {
// user_id:
//           },
//           files: {
//               file: 'fs://a.gif'
//           }
//       }
//   }, function(ret, err) {
//
//   });

  api.openWin({
                    name : 'root',
                    url : 'index.html',
                     reload:true,
                    slidBackEnabled:false,
                    delay:150,
            	 			animation:{
            	 				type:"fade",
            	 				subType:"from_bottom",
            	 		}

                })
}

function ondown(simga)
{

var simg_el=functionURLimg+simga;
  api.imageCache({
      url: simg_el,
      policy: 'cache_else_network'
  }, function(ret, err) {
      var url = ret.url;
      console.log(url);
      // document.getElementById('image').getElementsByTagName('img')[0].src = url;
      var imageBrowser = api.require('imageBrowser');
      imageBrowser.openImages({
        showList:false,
          imageUrls: [
  url
          ]
      });

  });



}



function ondown_lc(simga,statusName,uid)
{

var simg_el=functionURLimg+simga;


console.log("运单ID"+uid);
  api.openWin({
                    name : 'order_lct',
                    url : '../order/lct.html',
                     reload:true,
                    slidBackEnabled:false,
                        pageParam: {imgu: simg_el,statusName:statusName,id:uid},
                    delay:150,
            	 			animation:{
            	 				type:"fade",
            	 				subType:"from_bottom",
            	 		}

                })

  // api.imageCache({
  //     url: simg_el,
  //     policy: 'cache_else_network'
  // }, function(ret, err) {
  //     var url = ret.url;
  //     console.log(url);
  //     // document.getElementById('image').getElementsByTagName('img')[0].src = url;
  //     var imageBrowser = api.require('imageBrowser');
  //     imageBrowser.openImages({
  //       showList:false,
  //         imageUrls: [
  // url
  //         ]
  //     });
  //
  // });



}

function ondown_as(simga)
{
console.log(simga);
var urla;
  var urla = simga;
  api.imageCache({
      url: simga,
      policy: 'cache_else_network'
  }, function(ret, err) {
    if(ret)
    {
      var urla = ret.url;

    }

      });


return urla;

}

//指定ele_ 缓存加载图片
   function imageCache_a() {

//console.log(1233);

    //   var imageURL = $api.attr(ele_, 'data-url');
 var fullpicture=$api.getStorage('fullpicture').split(",");
      for (i = 0; i < fullpicture.length; i++) {
    var imgurl=functionURLimg+fullpicture[i];
var dd="sssa"+i;
imgsrc_cache(imgurl,dd)
    //console.log(imgurl);
      //  api.imageCache({
      //      url: imgurl,
      //     // policy: 'cache_else_network'
      //  }, function(ret, err) {
      //      if (ret.status) {
      //        console.log(ret.url);
      //            //$api.attr(ele_, "src", ret.url)
      //            console.log(i);
      //               console.log(dd);
      //        document.getElementById(dd).src = ret.url;
      //       //   ele_.src = ret.url;
      //   //       $api.removeAttr(ele_, 'data-url');
      //      }
      //  });
     }
   }

   function imgsrc_cache(imgurl,dd)
   {
     api.imageCache({
         url: imgurl,
        // policy: 'cache_else_network'
     }, function(ret, err) {
         if (ret.status) {
      //     console.log(ret.url);

           document.getElementById(dd).src = ret.url;
          //   ele_.src = ret.url;
      //       $api.removeAttr(ele_, 'data-url');
         }
     });

   }

   function imageCache_b() {

  var emptypicture=$api.getStorage('emptypicture').split(",");
      for (i = 0; i < emptypicture.length; i++) {
    var imgurl=functionURLimg+emptypicture[i];
  var dd="sssb"+i;
  imgsrc_cache(imgurl,dd)

     }
   }

   function imageCache_c() {

  var unloadpicture=$api.getStorage('unloadpicture').split(",");
      for (i = 0; i < unloadpicture.length; i++) {
    var imgurl=functionURLimg+unloadpicture[i];


  var dd="sssc"+i;
  imgsrc_cache(imgurl,dd)

     }
   }

function ondown_y(simga)
{



  var imageBrowser = api.require('imageBrowser');
  imageBrowser.openImages({
    showList:false,
      imageUrls: [
simga
      ]
  });

}

function call(num){
  api.call({
      type: 'tel',
      number: num
  });
}

function opentelboat(sid)
{

//http://47.96.165.26:8080/ncgc/sandCarrierScreen/findOne.json?uid=10//根据用户找运沙船

api.ajax({
    url: functionURL + 'sandCarrierScreen/findOne.json',
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



                if(item['mobileRemark']!=null)
                {
                        var sname=item['name']+" 船主："+item['ownerName']+"\n"+item['mobileRemark'];

                        api.confirm({
                            title: '拨打电话',
                            msg: sname,
                            buttons: ['拨打', '取消']
                        }, function(res, err) {
                            var index = res.buttonIndex;
                                console.log(index);
                                if(index==1)
                                {
                  call(item['mobileRemark']);
                                }


                        });

              }
              else {

                            if(item['tel']!=null)
                            {
      var sname=item['name']+" 船主："+item['ownerName']+"\n"+item['tel'];
                              api.confirm({
                                  title: '拨打电话',
                                  msg: sname,
                                  buttons: ['拨打', '取消']
                              }, function(res, err) {
                                  var index = res.buttonIndex;
                                      console.log(index);
                                      if(index==1)
                                      {
                        call(item['tel']);
                                      }


                              });

                            }
                              else {
                                api.toast({
                              msg: '此用户没有记录电话',
                              duration: 2000,
                              location: 'middle'
                              });

                              }
              }



    }
  }
});


}


function opentelboataaaa(sid)
{

//http://47.96.165.26:8080/ncgc/sandCarrierScreen/findOne.json?uid=10//根据用户找运沙船

api.ajax({
    url: functionURL + 'sandCarrierScreen/findOne.json',
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
      var sname=item['name']+" 船主："+item['ownerName']+"\n"+item['tel'];


            if(item['tel']!=null)
            {
  //  console.log(JSON.stringify(ret));
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
call(item['tel']);
              }


      });

    }

    else {
      api.toast({
    msg: '此用户没有记录电话',
    duration: 2000,
    location: 'middle'
    });
    }

    }
  }
});


}


function opentelsandboat(sid)
{

//http://47.96.165.26:8080/ncgctest/sandBoatScreen/find.json?uid=19

api.ajax({
    url: functionURL + 'sandBoatScreen/find.json',
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
}, function(item, err) {
    if (item) {
console.log(JSON.stringify(item));



      if(item['mobileRemark']!=null)
      {

            var sname=item['name']+" 船主："+item['ownerName']+"\n"+item['mobileRemark'];
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
call(item['mobileRemark']);
              }


      });
    }
    else {

                if(item['tel']!=null)
                {
                      var sname=item['name']+" 船主："+item['ownerName']+"\n"+item['tel'];
                api.confirm({
                    title: '拨打电话',
                    msg: sname,
                    buttons: ['拨打', '取消']
                }, function(res, err) {
                    var index = res.buttonIndex;
                        console.log(index);
                        if(index==1)
                        {
              call(item['tel']);
                        }


                });
              }

                else{
                api.toast({
              msg: '此用户没有记录电话',
              duration: 2000,
              location: 'middle'
              });
                }



    }


  }
});



}



function opentelsandboataaaaa(sid)
{

//http://47.96.165.26:8080/ncgctest/sandBoatScreen/find.json?uid=19

api.ajax({
    url: functionURL + 'sandBoatScreen/find.json',
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
}, function(item, err) {
    if (item) {
console.log(JSON.stringify(item));
      var sname=item['name']+" 船主："+item['ownerName']+"\n"+item['tel'];


      if(item['tel']!=null)
      {
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
call(item['tel']);
              }


      });
    }
    else {
      api.toast({
    msg: '此用户没有记录电话',
    duration: 2000,
    location: 'middle'
    });
    }


  }
});



}

function openteldeliver(sid)
{

//  http://47.96.165.26:8080/ncgctest/sysUserScreen/find.json?userId=1

api.ajax({
    url: functionURL + 'sysUserScreen/find.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
        values: {
            userId: sid
        },
        files: {
            file: 'fs://a.gif'
        }
    }
}, function(item, err) {
    if (item) {

      var sname="发货员："+item['realName']+"  "+item['mobile'];

      if(item['mobile']!=null)
      {
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
call(item['mobile']);
              }


      });

    }
    else {
      api.toast({
    msg: '此用户没有记录电话',
    duration: 2000,
    location: 'middle'
    });
    }



  }
});

}

function opentelsandplantOwner(sid)
{



api.ajax({
    url: functionURL + 'sysUserScreen/find.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
        values: {
            userId: sid
        },
        files: {
            file: 'fs://a.gif'
        }
    }
}, function(item, err) {
    if (item) {

      var sname="砂场管理员："+item['realName']+"  "+item['mobile'];

      if(item['mobile']!=null)
      {
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
call(item['mobile']);
              }


      });

    }
    else {
      api.toast({
    msg: '此用户没有记录电话',
    duration: 2000,
    location: 'middle'
    });
    }



  }
  else {
    api.toast({
  msg: '获取用户信息失败',
  duration: 2000,
  location: 'middle'
  });
  }
});

}


function opentelparentSandplantOwner(sid)
{



api.ajax({
    url: functionURL + 'sysUserScreen/find.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
        values: {
            userId: sid
        },
        files: {
            file: 'fs://a.gif'
        }
    }
}, function(item, err) {
    if (item) {
console.log(JSON.stringify(item));
      var sname="一级砂场管理员："+item['realName']+"  "+item['mobile'];

      if(item['mobile']!=null)
      {
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
call(item['mobile']);
              }


      });

    }
    else {
      api.toast({
    msg: '此用户没有记录电话',
    duration: 2000,
    location: 'middle'
    });
    }



  }
  else {
    api.toast({
  msg: '获取用户信息失败',
  duration: 2000,
  location: 'middle'
  });
  }
});

}

function opentelfc(sid,s_name)
{

//  http://47.96.165.26:8080/ncgctest/sysUserScreen/find.json?userId=1

api.ajax({
    url: functionURL + 'sysUserScreen/find.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
        values: {
            userId: sid
        },
        files: {
            file: 'fs://a.gif'
        }
    }
}, function(item, err) {
    if (item) {

      var sname=s_name+"："+item['userName']+"  "+item['mobile'];
      console.log(item['mobile']);
if(item['mobile']!=null)
{
      api.confirm({
          title: '拨打电话',
          msg: sname,
          buttons: ['拨打', '取消']
      }, function(res, err) {
          var index = res.buttonIndex;
              console.log(index);
              if(index==1)
              {
                    if(item['mobile']!=null)
                    {
                    call(item['mobile']);
                    }
                    else {
                alert(1);
                    }
              }


      });
}
else {
  api.toast({
msg: '此用户没有记录电话',
duration: 2000,
location: 'middle'
});
}

  }
});

}
function initliuchengimg(item)
{
 var lcimg="";

if(item['createType']==2)
{

        if(item['sandplantLevel']==1)
        {
              if(item['status']==2)
              {
                lcimg ="liucheng/2/2.png";
              }
              if(item['status']==3)
              {
              lcimg ="liucheng/2/3.png";
              }
              if(item['status']==4)
              {
              lcimg ="liucheng/2/4.png";
              }
              if(item['status']==5)
              {
              lcimg ="liucheng/2/5.png";
              }
              if(item['status']==6)
              {
                if(item['weight']!=item['realWeight'])
                {
      lcimg ="liucheng/2/6.png";

                }
                else {
      lcimg ="liucheng/2/11.png";
                }

              }
              if(item['status']==7)
              {
              lcimg ="liucheng/2/7.png";
              }
              if(item['status']==10)
              {

                if(item['weight']!=item['realWeight'])
                {
      lcimg ="liucheng/2/8.png";

                }
                else {
      lcimg ="liucheng/2/12.png";
                }


              }

              if(item['status']==8)
              {

                if(item['weight']!=item['realWeight'])
                {
    lcimg ="liucheng/2/9.png";

                }
                else {
      lcimg ="liucheng/2/13.png";
                }

              }

              if(item['status']==9)
              {

                if(item['weight']!=item['realWeight'])
                {
      lcimg ="liucheng/2/10.png";

                }
                else {
      lcimg ="liucheng/2/14.png";
                }


              }
        }
        else {

          if(item['sandtype']=='砾石')
          {


            if(item['status']==2)
            {
              lcimg ="liucheng/2/2.png";
            }
            if(item['status']==3)
            {
            lcimg ="liucheng/2/3.png";
            }
            if(item['status']==4)
            {
            lcimg ="liucheng/2/4.png";
            }
            if(item['status']==5)
            {
            lcimg ="liucheng/2/5.png";
            }
            if(item['status']==6)
            {
              if(item['weight']!=item['realWeight'])
              {
          lcimg ="liucheng/2/6.png";

              }
              else {
          lcimg ="liucheng/2/11.png";
              }

            }
            if(item['status']==7)
            {
            lcimg ="liucheng/2/7.png";
            }
            if(item['status']==10)
            {

              if(item['weight']!=item['realWeight'])
              {
          lcimg ="liucheng/2/8.png";

              }
              else {
          lcimg ="liucheng/2/12.png";
              }


            }

            if(item['status']==8)
            {

              if(item['weight']!=item['realWeight'])
              {
          lcimg ="liucheng/2/9.png";

              }
              else {
          lcimg ="liucheng/2/13.png";
              }

            }

            if(item['status']==9)
            {

              if(item['weight']!=item['realWeight'])
              {
          lcimg ="liucheng/2/10.png";

              }
              else {
          lcimg ="liucheng/2/14.png";
              }


            }

          }
          else {

            if(item['status']==2)
            {
              lcimg ="liucheng/4/2.png";
            }
            if(item['status']==3)
            {
            lcimg ="liucheng/4/3.png";
            }
            if(item['status']==4)
            {
            lcimg ="liucheng/4/4.png";
            }
            if(item['status']==5)
            {
            lcimg ="liucheng/4/5.png";
            }
            if(item['status']==7)
            {
            lcimg ="liucheng/4/6.png";
            }
            if(item['status']==7)
            {
            lcimg ="liucheng/4/7.png";
            }
            if(item['status']==10)
            {
            lcimg ="liucheng/4/10.png";
            }

            if(item['status']==8)
            {
            lcimg ="liucheng/4/8.png";
            }

            if(item['status']==9)
            {
            lcimg ="liucheng/4/9.png";
            }


          }


        }
}
else {

          if(item['sandplantLevel']==1)
          {
              if(item['status']==2)
              {
                lcimg ="liucheng/1/1.png";
              }
              if(item['status']==3)
              {
              lcimg ="liucheng/1/2.png";
              }
              if(item['status']==4)
              {
              lcimg ="liucheng/1/3.png";
              }
              if(item['status']==5)
              {
              lcimg ="liucheng/1/4.png";
              }
              if(item['status']==6)
              {
              lcimg ="liucheng/1/5.png";
              }
              if(item['status']==7)
              {

                if(item['weight']!=item['realWeight'])
                {
            lcimg ="liucheng/1/6.png";

                }
                else {
            lcimg ="liucheng/1/10.png";
                }


              }
              if(item['status']==10)
              {
                if(item['weight']!=item['realWeight'])
                {
            lcimg ="liucheng/1/7.png";

                }
                else {
            lcimg ="liucheng/1/11.png";
                }

              }

              if(item['status']==8)
              {
                if(item['weight']!=item['realWeight'])
                {
            lcimg ="liucheng/1/8.png";

                }
                else {
            lcimg ="liucheng/1/12.png";
                }
              }

              if(item['status']==9)
              {
                if(item['weight']!=item['realWeight'])
                {
            lcimg ="liucheng/1/9.png";

                }
                else {
            lcimg ="liucheng/1/13.png";
                }
              }
          }
          else {

                    if(item['sandtype']=='砾石')
                    {

                      if(item['status']==2)
                      {
                        lcimg ="liucheng/1/1.png";
                      }
                      if(item['status']==3)
                      {
                      lcimg ="liucheng/1/2.png";
                      }
                      if(item['status']==4)
                      {
                      lcimg ="liucheng/1/3.png";
                      }
                      if(item['status']==5)
                      {
                      lcimg ="liucheng/1/4.png";
                      }
                      if(item['status']==6)
                      {
                      lcimg ="liucheng/1/5.png";
                      }
                      if(item['status']==7)
                      {

                        if(item['weight']!=item['realWeight'])
                        {
                    lcimg ="liucheng/1/6.png";

                        }
                        else {
                    lcimg ="liucheng/1/10.png";
                        }


                      }
                      if(item['status']==10)
                      {
                        if(item['weight']!=item['realWeight'])
                        {
                    lcimg ="liucheng/1/7.png";

                        }
                        else {
                    lcimg ="liucheng/1/11.png";
                        }

                      }

                      if(item['status']==8)
                      {
                        if(item['weight']!=item['realWeight'])
                        {
                    lcimg ="liucheng/1/8.png";

                        }
                        else {
                    lcimg ="liucheng/1/12.png";
                        }
                      }

                      if(item['status']==9)
                      {
                        if(item['weight']!=item['realWeight'])
                        {
                    lcimg ="liucheng/1/9.png";

                        }
                        else {
                    lcimg ="liucheng/1/13.png";
                        }
                      }


                    }
                    else {

                      if(item['status']==2)
                      {
                        lcimg ="liucheng/3/2.png";
                      }
                      if(item['status']==3)
                      {
                      lcimg ="liucheng/3/3.png";
                      }
                      if(item['status']==4)
                      {
                      lcimg ="liucheng/3/4.png";
                      }
                      if(item['status']==5)
                      {
                      lcimg ="liucheng/3/5.png";
                      }
                      if(item['status']==6)
                      {
                      lcimg ="liucheng/3/6.png";
                      }
                      if(item['status']==7)
                      {
                      lcimg ="liucheng/3/7.png";
                      }
                      if(item['status']==10)
                      {
                      lcimg ="liucheng/3/10.png";
                      }

                      if(item['status']==8)
                      {
                      lcimg ="liucheng/3/8.png";
                      }

                      if(item['status']==9)
                      {
                      lcimg ="liucheng/3/9.png";
                      }


                    }


          }
}

return lcimg;
}
function initNote(item,status,sandboatId,boatId,sandplantOwnerId,statusdd,expectTime)
{
  var html="";
  var sa="";
  var displayddd="";
  if(statusdd==1)
  {
    displayddd=" display:none;";
  }
  switch(status)
  {
  case 1:

  html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
              html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
              html+='<div class="col-xs-12">';
              html+='<div class="tab-font1">正在等待采砂船管理员完善运单</div>';
              html+='</div>';
              html+='</div>';
  html+='</div>';

    break;
  case 2:
  html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
              html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
              html+='<div class="col-xs-9">';
              html+='<div class="tab-font1">正在等待采砂船船主（泵主）确认，点击后面按钮联系他</div>';
              html+='</div>';
              html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
              html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelsandboat('+sandboatId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
              html+='</div>';
              html+='</div>';
  html+='</div>';
    break;

    case 3:
    html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                html+='<div class="col-xs-9">';
                html+='<div class="tab-font1">正在等待运砂船船主确认运输，点击后面按钮联系他</div>';
                html+='</div>';
                html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
                html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelboat('+boatId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                html+='</div>';
                html+='</div>';
    html+='</div>';
      break;
      case 4:
      html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                  html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                  html+='<div class="col-xs-9">';
                  html+='<div class="tab-font1">正在等待运砂船运输完毕，点击后面按钮联系他&nbsp;&nbsp;预计到达时间:'+expectTime+'</div>';
                  html+='</div>';
                  html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
                  html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelboat('+boatId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                  html+='</div>';
                  html+='</div>';
      html+='</div>';
        break;
        case 5:
        html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                    html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                    html+='<div class="col-xs-9">';
                    html+='<div class="tab-font1">正在等待砂场管理员核定运砂量，点击后面按钮联系他</div>';
                    html+='</div>';
                    html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
                    html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelsandplantOwner('+sandplantOwnerId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                    html+='</div>';
                    html+='</div>';
        html+='</div>';
          break;
          case 6:
          html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                      html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                      html+='<div class="col-xs-9">';
                      html+='<div class="tab-font1">正在等待运砂船主确认修改后的运砂量，点击后面按钮联系他</div>';
                      html+='</div>';
                      html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
                      html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelboat('+boatId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                      html+='</div>';
                      html+='</div>';
          html+='</div>';
            break;
            case 7:
            html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                        html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                        html+='<div class="col-xs-9">';
                        html+='<div class="tab-font1">正在等待砂场负责人同意卸货，点击后面按钮联系他</div>';
                        html+='</div>';
                        html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
                        html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelsandplantOwner('+sandplantOwnerId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                        html+='</div>';
                        html+='</div>';
            html+='</div>';
              break;

              case 8:
              html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                          html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                          html+='<div class="col-xs-9">';
                          html+='<div class="tab-font1">正在等待砂场负责人签收，点击后面按钮联系他</div>';
                          html+='</div>';
                          html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
if(item['sandplantLevel']==2)
{
   html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelsandplantOwner('+item['parentSandplantOwnerId']+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
}
else
{
     html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelsandplantOwner('+sandplantOwnerId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
}

                        //  html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelsandplantOwner('+sandplantOwnerId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                          html+='</div>';
                          html+='</div>';
              html+='</div>';
                break;
                case 10:
                html+='<div style="width: 100%;	position:relative; zoom:1; overflow:hidden;'+displayddd+'" id="zdsddd">';
                            html+='<div class="row" style="background:#8ec6ff; padding:10px 15px; color:#fff">';
                            html+='<div class="col-xs-9">';
                            html+='<div class="tab-font1">正在等待运砂船上传卸砂照片，点击后面按钮联系他</div>';
                            html+='</div>';
                            html+='<div class="col-xs-3" style="padding-left:0; padding-right:0">';
                            html+='<div class="tab-font1 tab-r"><button type="button" onclick="opentelboat('+boatId+')" class="btn btn-primary" style="background:#2a9cfd; border:0">联系他</button></div>';
                            html+='</div>';
                            html+='</div>';
                html+='</div>';
                  break;


  default:

  }





return html;
}


function openguiji(billNum)
{


  api.openWin({

             name : 'order_orderguiji',
             url : '../order/orderguiji.html',
             slidBackEnabled:false,
             reload:true,
              pageParam: {id:billNum },

     });

}


function checkfw(ret)
{

var ret = JSON.parse(ret);

  if(ret.msg=="非法访问")
  {
  api.toast({
                           msg: '非法访问!请重新登录',
                            duration: 2000,
                         location: 'middle'
  });

  api.closeWin({
      name: 'glylist'
  });
  api.closeWin({
      name: 'order_csc08'
  });
  api.closeWin({
      name: 'pqglylist'
  });
  api.closeWin({
      name: 'pqglylist'
  });


  api.execScript({
        name: 'order_orderlist',
        frameName:'order_order0',

  script: 'closeorder0();'
  });
  api.sendEvent({
                          name: 'myEventtcjson',
                          extra: {


                          }
                      });

  }

}
