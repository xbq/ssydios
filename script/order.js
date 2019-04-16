function openorderinfo(uid)
{

        api.openWin({

                   name : 'order_orderinfo',
                   url : '../order/orderinfo.html',
                   slidBackEnabled:false,
                   hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}

function openorderinfo_7(uid)
{

        api.openWin({

                   name : 'order_orderinfo_7',
                   url : '../order/orderinfo_7.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}


function openorderinfo_5(uid)
{

        api.openWin({

                   name : 'order_orderinfo_5',
                   url : '../order/orderinfo_5.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}

function openorderinfo_8(uid)
{

        api.openWin({

                   name : 'order_orderinfo_8',
                   url : '../order/orderinfo_8.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}

function openorderinfo_4(uid)
{

        api.openWin({

                   name : 'order_orderinfo_4',
                   url : '../order/orderinfo_4.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}

function openorderinfo_3(uid)
{


        api.openWin({

                   name : 'order_orderinfo_3',
                   url : '../order/orderinfo_3.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}

function openorderinfo_33(uid)
{


        api.openWin({

                   name : 'order_orderinfo_33',
                   url : '../order/orderinfo_33.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}
function openorderinfo_31(uid)
{


        api.openWin({

                   name : 'order_orderinfo_31',
                   url : '../order/orderinfo_31.html',
                   slidBackEnabled:false,
                      hideHomeIndicator:true,
                   reload:true,
                   pageParam: {id: uid},

           });

}


function openorder_ts(sid)
{

  // api.confirm({
  //     title: '提示',
  //     msg: '您在15分钟内未进行确认操作，运单已被锁定，请及时联系采区负责人解锁。',
  //     buttons: ['确定']
  // }, function(ret, err) {
  //     var index = ret.buttonIndex;
  // });
  api.alert({
      title: '提示',
      msg: '您在15分钟内未进行确认操作，运单已被锁定，请及时联系采区负责人解锁。',
  }, function(ret, err) {

  });
}
