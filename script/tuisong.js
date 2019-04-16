function loginForCId(userName, passWord, cId) {
           //如果通信连接正常,模拟登录绑定cid

           api.ajax({
                 url: functionURL + 'sysUserScreen/loginForApp.json',
            //   url: 'http://47.96.165.26:8080/ncgctest/sysUserScreen/loginForApp.json',
               method: 'post',
               data: {
                   values: {
                       username: userName,
                       password: passWord,
                       cid: cId
                   }
               }
           }, function(ret, err) {
               if (ret) {

                 //$api.setStorage('s_cid',cId);//登录ID
                   api.alert({
                       msg: JSON.stringify(ret)
                   });
                  // console.log(JSON.stringify(ret));
               } else {
                  //  api.alert({
                  //      msg: JSON.stringify(err)
                  //  });
               }
           });
       }

       //ajax请求服务器向指定用户推送消息
       function serverSendMessage() {
           api.ajax({
               url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
               method: 'post',
               dataType: 'json',
               data: {
                   values: {
                       targetId: 19, //目标船或者砂厂的ID,到时候传参数
                       waybillId: 257, //到时候传参数
                       title: '消息标题', //到时候传参数
                       content: '消息内容', //到时候传参数
                       remark: 'sandboatOwner' //到时候传参数
                   }
               }
           }, function(ret, err) {
               if (ret) {
                   alert(JSON.stringify(ret));
               } else {
                   alert(JSON.stringify(err));
               }
           });
       }



       //完全停止SDK的服务。停止推送服务，停止所有业务逻辑
       function stopService() {
           uzgetuisdk.stopService(function(ret) {
               // TODO:
               api.alert({
                   msg: "stopService result:" + ret.result
               });
           });
           document.getElementById("txt_getui_cid").innerHTML = "cid:";
       }

       //获取cid
       function fetchClientId() {
           uzgetuisdk.fetchClientId(function(ret, err) {
               api.alert({
                   msg: "cid:" + ret.cid
               });
               console.log(ret.cid);
           });
       }

       //获取个推SDK版本号
       function getVersion() {
           uzgetuisdk.getVersion(function(ret) {
               document.getElementById("txt_getui_version").innerHTML = "version:" + ret.version;
           });
       }

       //设置角标功能,同步服务器角标计数
       function setSerBadge() {
           var param = {
               badge: 0
           };
           uzgetuisdk.setBadge(param, function(ret) {
              //  api.alert({
              //      msg: "setBadge result:" + ret.result
              //  });
           });
       }

       //设置本地应用的角标计数
       function setAppBadge() {
           api.setAppIconBadge({
               badge: 0
           });
       }

       //为用户设置标签。针对单个CID设置标签（tag）列表，服务端推送可以指定标签进行定向群发
       function setTag() {
           var param = {
               tags: "tag1,tag2"
           };
           uzgetuisdk.setTag(param, function(ret) {
               document.getElementById("txt_getui_settag").innerHTML = "settag: " + ret.result;
           });
       }

       //绑定用户别名。针对单个CID设置别名，一个别名可以对应多个CID。可以指定别名进行消息推送
       function bindAlias() {
           var param = {
               alias: "myalias"
           };
           uzgetuisdk.bindAlias(param, function(ret) {
               document.getElementById("txt_getui_bindalias").innerHTML = "bindAlias: " + ret.result;
           });
       }

       //设置SDK静默时间。在指定时间段内，暂停推送服务联网，可以避免用户打扰，同时起到省电省流量的作用。
       //例如：beginHour=21、duration=12，含义为晚9点到早9点之间静默
       function setSilentTime() {
           var param = {
               beginHour: 9,
               duration: 12
           };
           uzgetuisdk.setSilentTime(param, function(ret) {
               // TODO
               api.alert({
                   msg: "setSilentTime result:" + ret.result
               });
           });
       }

       function isPushTurnedOn() {
           uzgetuisdk.isPushTurnedOn(function(ret) {
               document.getElementById("txt_getui_ispushturnedon").innerHTML = "isPushTurnedOn: " + ret.isOn;
           });
       }


//status2
       function serverSendMessage2(ssuid) {
           api.ajax({
                  url: functionURL + 'wayBillScreen/sendMesForIos.json',
              // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
               method: 'post',
               dataType: 'json',
               data: {
                   values: {
                       targetId: $api.getStorage('ucsc06id'), //采砂船ID
                       waybillId: ssuid, //到时候传参数
                       title: '确认运单', //到时候传参数
                       content: '您有新运单要确认', //到时候传参数
                       remark: 'sandboatOwner' //到时候传参数
                   }
               }
           }, function(ret, err) {
               if (ret) {
                 console.log($api.getStorage('ucsc06id'));
                  console.log(ssuid);
                  // alert(JSON.stringify(ret));
               } else {
                //   alert(JSON.stringify(err));
               }
           });
       }

       //status3
       //http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json?waybillId=345&targetId=14&title=1&content=2&remark=sandcarrier
              function serverSendMessage3(BoatId,uid) {
                  api.ajax({
                         url: functionURL + 'wayBillScreen/sendMesForIos.json',
                     // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                      method: 'post',
                      dataType: 'json',
                      data: {
                          values: {
                              targetId: BoatId, //目标船或者砂厂的ID,到时候传参数
                              waybillId: uid, //到时候传参数
                              title: '开始运输', //到时候传参数
                              content: '您的运单已确认,可以开始运输', //到时候传参数
                              remark: 'sandcarrier' //到时候传参数
                          }
                      }
                  }, function(ret, err) {
                      if (ret) {
                          //alert(JSON.stringify(ret));
                      } else {
                          //alert(JSON.stringify(err));
                      }
                  });
              }

              //status5
                     //http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json?waybillId=345&targetId=14&title=1&content=2&remark=sandcarrier
                     function serverSendMessage5(ToDistrict,uid) {
                         api.ajax({
                                url: functionURL + 'wayBillScreen/sendMesForIos.json',
                            // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                             method: 'post',
                             dataType: 'json',
                             data: {
                                 values: {
                                     targetId: ToDistrict, //目标船或者砂厂的ID,到时候传参数
                                     waybillId: uid, //到时候传参数
                                     title: '确认运单', //到时候传参数
                                     content: '您有新运单要确认', //到时候传参数
                                     remark: 'sandplant' //到时候传参数
                                 }
                             }
                         }, function(ret, err) {
                             if (ret) {
                              //   alert(JSON.stringify(ret));
                             } else {
                              //   alert(JSON.stringify(err));
                             }
                         });
                     }


                     //status6  修改确认


                            function serverSendMessage6(BoatId,uid) {
                                api.ajax({
                                       url: functionURL + 'wayBillScreen/sendMesForIos.json',
                                   // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                                    method: 'post',
                                    dataType: 'json',
                                    data: {
                                        values: {
                                            targetId: BoatId, //目标船或者砂厂的ID,到时候传参数
                                            waybillId: uid, //到时候传参数
                                            title: '修改确认', //到时候传参数
                                            content: '您的运单已被修改，请确认', //到时候传参数
                                            remark: 'sandcarrier' //到时候传参数
                                        }
                                    }
                                }, function(ret, err) {
                                    if (ret) {
                                     //   alert(JSON.stringify(ret));
                                    } else {
                                     //   alert(JSON.stringify(err));
                                    }
                                });
                            }

                            //status6
                                   function serverSendMessage62(SandboatId,uid) {
                                       api.ajax({
                                              url: functionURL + 'wayBillScreen/sendMesForIos.json',
                                          // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                                           method: 'post',
                                           dataType: 'json',
                                           data: {
                                               values: {
                                                   targetId: SandboatId, //目标船或者砂厂的ID,到时候传参数
                                                   waybillId: uid, //到时候传参数
                                                   title: '运单已修改', //到时候传参数
                                                   content: '您的运单已被修改，点击查看', //到时候传参数
                                                   remark: 'sandboatOwner' //到时候传参数
                                               }
                                           }
                                       }, function(ret, err) {
                                           if (ret) {
                                            //   alert(JSON.stringify(ret));
                                           } else {
                                            //   alert(JSON.stringify(err));
                                           }
                                       });
                                   }


                       //status7
                              function serverSendMessage7(ToDistrict,uid) {
                                  api.ajax({
                                         url: functionURL + 'wayBillScreen/sendMesForIos.json',
                                     // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                                      method: 'post',
                                      dataType: 'json',
                                      data: {
                                          values: {
                                              targetId: ToDistrict, //目标船或者砂厂的ID,到时候传参数
                                              waybillId: uid, //到时候传参数
                                              title: '卸货申请', //到时候传参数
                                              content: '有新运单需要您同意卸货', //到时候传参数
                                              remark: 'sandplant' //到时候传参数
                                          }
                                      }
                                  }, function(ret, err) {
                                      if (ret) {
                                       //   alert(JSON.stringify(ret));
                                      } else {
                                       //   alert(JSON.stringify(err));
                                      }
                                  });
                              }

          //status8
                 function serverSendMessage8(ToDistrict,uid) {
                     api.ajax({
                            url: functionURL + 'wayBillScreen/sendMesForIos.json',
                        // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                         method: 'post',
                         dataType: 'json',
                         data: {
                             values: {
                                 targetId: ToDistrict, //目标船或者砂厂的ID,到时候传参数
                                 waybillId: uid, //到时候传参数
                                 title: '签收确认', //到时候传参数
                                 content: '您的运单已卸货，请确认', //到时候传参数
                                 remark: 'sandplant' //到时候传参数
                             }
                         }
                     }, function(ret, err) {
                         if (ret) {
                          //   alert(JSON.stringify(ret));
                         } else {
                          //   alert(JSON.stringify(err));
                         }
                     });
                 }


                 //status9
                        function serverSendMessage9(BoatId,uid) {
                            api.ajax({
                                   url: functionURL + 'wayBillScreen/sendMesForIos.json',
                               // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                                method: 'post',
                                dataType: 'json',
                                data: {
                                    values: {
                                        targetId: BoatId, //目标船或者砂厂的ID,到时候传参数
                                        waybillId: uid, //到时候传参数
                                        title: '已签收', //到时候传参数
                                        content: '您的运单已签收', //到时候传参数
                                        remark: 'sandcarrier' //到时候传参数
                                    }
                                }
                            }, function(ret, err) {
                                if (ret) {
                                 //   alert(JSON.stringify(ret));
                                } else {
                                 //   alert(JSON.stringify(err));
                                }
                            });
                        }

                        //status10
                               function serverSendMessage10(BoatId,uid) {
 console.log("messa");
                                 console.log(BoatId);
                                  console.log(uid);
                                   api.ajax({
                                     //url:'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json?waybillId=370&targetId=10&title=1&content=2&remark=sandcarrier',
                                       url: functionURL + 'wayBillScreen/sendMesForIos.json',
                                      // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                                       method: 'post',
                                       dataType: 'json',
                                       data: {
                                           values: {
                                               targetId: BoatId, //目标船或者砂厂的ID,到时候传参数
                                               waybillId: uid, //到时候传参数
                                               title: '卸货确认', //到时候传参数
                                               content: '您的运单已确认可以卸货', //到时候传参数
                                               remark: 'sandcarrier' //到时候传参数
                                           }
                                       }
                                   }, function(ret, err) {
                                       if (ret) {
                                        //   alert(JSON.stringify(ret));
                                       } else {
                                        //   alert(JSON.stringify(err));
                                       }
                                   });
                               }

                               //运单改派
                                      function serverSendMessagegp(BoatId,uid) {
                                          api.ajax({
                                                 url: functionURL + 'wayBillScreen/sendMesForIos.json',
                                             // url: 'http://47.96.165.26:8080/ncgctest/wayBillScreen/sendMesForIos.json', //采砂船上传经纬度
                                              method: 'post',
                                              dataType: 'json',
                                              data: {
                                                  values: {
                                                      targetId: BoatId, //目标船或者砂厂的ID,到时候传参数
                                                      waybillId: uid, //到时候传参数
                                                      title: '改派确认', //到时候传参数
                                                      content: '您的运单已变更目标砂场，请点击查看', //到时候传参数
                                                      remark: 'sandcarrier' //到时候传参数
                                                  }
                                              }
                                          }, function(ret, err) {
                                              if (ret) {
                                               //   alert(JSON.stringify(ret));
                                              } else {
                                               //   alert(JSON.stringify(err));
                                              }
                                          });
                                      }
