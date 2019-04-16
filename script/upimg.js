function func(str){
    return str.replace(/[\r\n]/g, '');
}
function s_updateimg(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/fullPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {




                  //alert(JSON.stringify(ret));
                  console.log(JSON.stringify(reta));


// //修改订单状态
if(reta==strArr.length){

//if(reta==1){
setTimeout(function() {
        api.openWin({

                   name : 'order_orderlist',
                   url : '../order/orderlist.html',
                   slidBackEnabled:false,
                   reload:true,

           });

                          // api.ajax({
                          //     url: functionURL + 'wayBillScreen/update.json',
                          //     dataType:'text',
                          //     headers:
                          //     {
                          //
                          //       login_token:$api.getStorage('loginToken')
                          //     },
                          //     method: 'post',
                          //     data: {
                          //         values: {
                          //             uid: retsd,
                          //             status:2
                          //         },
                          //         files: {
                          //             file: 'fs://a.gif'
                          //         }
                          //     }
                          // }, function(ret, err) {
                          //     if (ret) {
                          //       api.closeWin({
                          //           name: 'order_orderlist'
                          //       });
                          //
                          //
                          //       api.openWin({
                          //
                          //                  name : 'order_orderlist',
                          //                  url : '../order/orderlist.html',
                          //                  slidBackEnabled:false,
                          //                  reload:true,
                          //
                          //          });
                          //
                          //
                          //
                          //     }
                          // });

}, 500) ;
}
else {
  api.toast({
msg: '照片传输失败！请重试',
duration: 2000,
location: 'middle'
});
}
// //修改订单状态


              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}

//满载照片-补传
function s_updateimg_bc(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/fullPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {

                  api.toast({
                msg: '照片上传成功',
                duration: 2000,
                location: 'middle'
                });
                api.execScript({
                        name:  'order_orderinfo',
                script: 'location.reload();'
                });
setTimeout(function() {
                api.closeWin({
                    name: 'order_orderphoto',
                    animation:{
                      type:"fade",
                      subType:"from_bottom",
                  }
                });

                // api.openWin({
                //
                //            name : 'order_orderinfo',
                //            url : '../order/orderinfo.html',
                //            slidBackEnabled:false,
                //            reload:true,
                //            pageParam: {id: retsd},
                //
                //
                //    });
              }, 1000) ;

              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


//空载照片

function s_updateimg_kz88(retsd)

{
  var strArr=document.getElementById("simg7").getElementsByTagName('IMG');

  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/emptyPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
            var szp=func(reta);
             api.hideProgress();
              if (szp==strArr.length) {

                  //alert(JSON.stringify(ret));
                  console.log("运砂船10"+JSON.stringify(szp));

submit788status();



              } else {
$("#status57").css("display","block");
                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


function s_updateimg_kz(retsd)

{
  var strArr=document.getElementById("simg7").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/emptyPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
            var szp=func(reta);
             api.hideProgress();
              if (szp==strArr.length) {

                  //alert(JSON.stringify(ret));
                  console.log("运砂船4"+JSON.stringify(szp));

submit7status();
                  // api.closeWin({
                  //     name: 'order_orderlist'
                  // });
                  //
                  // api.openWin({
                  //            name : 'order_orderlist',
                  //            url : '../order/orderlist.html',
                  //             reload:true,
                  //            slidBackEnabled:false,
                  //            delay:150,
                  //            animation:{
                  //              type:"fade",
                  //              subType:"from_bottom",
                  //          }
                  //
                  //        })


              } else {
  $("#status57").css("display","block");
                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


//空载照片
function s_updateimg_kz_bc(retsd)

{
    var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/emptyPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {
                  //alert(JSON.stringify(ret));
                  api.toast({
                msg: '照片上传成功',
                duration: 2000,
                location: 'middle'
                });

                api.execScript({
                        name:  'order_orderinfo_8',
                script: 'location.reload();'
                });
              setTimeout(function() {
                api.closeWin({
                    name: 'order_orderphoto',
                    animation:{
                      type:"fade",
                      subType:"from_bottom",
                  }
                });

                // api.openWin({
                //
                //            name : 'order_orderinfo_4',
                //            url : '../order/orderinfo_4.html',
                //            slidBackEnabled:false,
                //            reload:true,
                //            pageParam: {id: retsd},
                //
                //
                //    });
              }, 1000) ;


              } else {
                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}
function s_updateimg_kz_bc33(retsd)

{
    var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/emptyPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {
                  //alert(JSON.stringify(ret));
                  api.toast({
                msg: '照片上传成功',
                duration: 2000,
                location: 'middle'
                });

                api.execScript({
                        name:  'order_orderinfo_4',
                script: 'location.reload();'
                });
              setTimeout(function() {
                api.closeWin({
                    name: 'order_orderphoto',
                    animation:{
                      type:"fade",
                      subType:"from_bottom",
                  }
                });

                // api.openWin({
                //
                //            name : 'order_orderinfo_4',
                //            url : '../order/orderinfo_4.html',
                //            slidBackEnabled:false,
                //            reload:true,
                //            pageParam: {id: retsd},
                //
                //
                //    });
              }, 1000) ;


              } else {
                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}

//完善订单照片
function s_updateimg_ws(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/fullPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
             api.hideProgress();
            var szp=func(reta);
              if (szp==strArr.length) {
                  //alert(JSON.stringify(ret));
                  console.log("完善订单"+JSON.stringify(reta));
                  subtijiaostatus();
                  // api.closeWin({
                  //     name: 'order_orderlist'
                  // });
                  //
                  // api.openWin({
                  //            name : 'order_orderlist',
                  //            url : '../order/orderlist.html',
                  //             reload:true,
                  //            slidBackEnabled:false,
                  //            delay:150,
                  //            animation:{
                  //              type:"fade",
                  //              subType:"from_bottom",
                  //          }
                  //
                  //        })


              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


//拍照确认订单照片

function s_updateimg_pz33(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
            var szp=func(reta);
             api.hideProgress();
              if (szp==strArr.length) {

$("#subpz1button").css("display","none");
                  //alert(JSON.stringify(ret));
                  console.log("砂场收货33"+JSON.stringify(szp));
subpz33status();

                  // api.execScript({
                  //         name:  'order_orderinfo_3',
                  // script: 'location.reload();'
                  // });

              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


function s_updateimg_pz33newadd(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
            var szp=func(reta);
             api.hideProgress();
              if (szp==strArr.length) {
                api.toast({
              msg: '照片上传成功',
              duration: 2000,
              location: 'middle'
              });
//$("#subpz1button").css("display","none");
                  //alert(JSON.stringify(ret));
                  //console.log("砂场收货33"+JSON.stringify(szp));
//subpz33status();

                  // api.execScript({
                  //         name:  'order_orderinfo_3',
                  // script: 'location.reload();'
                  // });

              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


function s_updateimg_pz(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
            var szp=func(reta);
             api.hideProgress();
              if (szp==strArr.length) {

$("#subpz1button").css("display","none");
                  //alert(JSON.stringify(ret));
                  console.log("砂场3"+JSON.stringify(szp));
subpz1status();

                  // api.execScript({
                  //         name:  'order_orderinfo_3',
                  // script: 'location.reload();'
                  // });

              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}


function s_updateimg_pz_newadd(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);
       api.showProgress({
           animationType:'zoom',
           modal: false
       });
api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
            var szp=func(reta);
             api.hideProgress();
              if (szp==strArr.length) {

//$("#subpz1button").css("display","none");

api.toast({
msg: '照片上传成功',
duration: 2000,
location: 'middle'
});

                  console.log("砂场3"+JSON.stringify(szp));


              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}



//拍照确认订单照片
function s_updateimg_pz_bc(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {
                  //alert(JSON.stringify(ret));
                  console.log(JSON.stringify(reta));

                  api.toast({
                msg: '照片上传成功',
                duration: 2000,
                location: 'middle'
                });
                api.execScript({
                        name:  'order_orderinfo_3',
                script: 'location.reload();'
                });

              setTimeout(function() {
                api.closeWin({
                    name: 'order_orderphoto',
                    animation:{
                      type:"fade",
                      subType:"from_bottom",
                  }
                });

                // api.openWin({
                //
                //            name : 'order_orderinfo_3',
                //            url : '../order/orderinfo_3.html',
                //            slidBackEnabled:false,
                //            reload:true,
                //            pageParam: {id: retsd},
                //
                //
                //    });
              }, 1000) ;


              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}



//拍照确认订单照片
function s_updateimg_pz_bc31(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {
                  //alert(JSON.stringify(ret));
                  console.log(JSON.stringify(reta));

                  api.toast({
                msg: '照片上传成功',
                duration: 2000,
                location: 'middle'
                });
                api.execScript({
                        name:  'order_orderinfo_31',
                script: 'location.reload();'
                });
              setTimeout(function() {
                api.closeWin({
                    name: 'order_orderphoto',
                    animation:{
                      type:"fade",
                      subType:"from_bottom",
                  }
                });

                // api.openWin({
                //
                //            name : 'order_orderinfo_33',
                //            url : '../order/orderinfo_33.html',
                //            slidBackEnabled:false,
                //            reload:true,
                //            pageParam: {id: retsd},
                //
                //
                //    });
              }, 1000) ;


              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}

//拍照确认订单照片
function s_updateimg_pz_bc33(retsd)

{
  var strArr=document.getElementById("simg").getElementsByTagName('IMG');
  // for (i=0;i<strArr.length;i++ )
  // {
  // //if(imglist[i].src.indexOf("loading.gif",0)!=-1){imglist[i].src="imgage/"+i+".gif";}
  // console.log(imglist[i].src); //测试成功
  // }
  var postStr="";
  for (i = 1; i <= strArr.length; i++) {
               //console.log(strArr[i]);
               if (i == 1) {
                   postStr += '"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               } else {
                   postStr += ',"input-id-' + i + '":"' + strArr[i - 1].src + '"';
               }
           }

           postStr = "{" + postStr + "}";
           console.log(postStr);
       var a = JSON.parse(postStr);

api.ajax({
              url: functionURL + 'upLoadScreen/beforeUnloadPicture.json',
              method: 'post',
              headers:
              {

                login_token:$api.getStorage('loginToken')
              },
              dataType: 'text',
              data: {
                  values: {
                      fileCount: strArr.length,
                      billId: retsd,
                      userId: $api.getStorage('usid')
                  },
                  files: a
              }
          }, function(reta, err) {
              if (reta) {
                  //alert(JSON.stringify(ret));
                  console.log(JSON.stringify(reta));

                  api.toast({
                msg: '照片上传成功',
                duration: 2000,
                location: 'middle'
                });
                api.execScript({
                        name:  'order_orderinfo_33',
                script: 'location.reload();'
                });
              setTimeout(function() {
                api.closeWin({
                    name: 'order_orderphoto',
                    animation:{
                      type:"fade",
                      subType:"from_bottom",
                  }
                });

                // api.openWin({
                //
                //            name : 'order_orderinfo_33',
                //            url : '../order/orderinfo_33.html',
                //            slidBackEnabled:false,
                //            reload:true,
                //            pageParam: {id: retsd},
                //
                //
                //    });
              }, 1000) ;


              } else {

                api.toast({
              msg: '照片传输失败！请重试',
              duration: 2000,
              location: 'middle'
              });
                //  alert(JSON.stringify(err));
              }
          });
}
