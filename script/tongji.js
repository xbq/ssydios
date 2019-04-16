//周统计

function myArraysum_arr_list6(myArray,i)
{
  //console.log(myArray);

console.log(myArray);
          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
          // deliver: $api.getStorage('usid'),
           sandboatId: $api.getStorage('ucsc06id'),
           begintime:myArray,
           //endtime:add_time(myArray),
           endtime:myArray,
           remark:1

         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
        console.log(JSON.stringify(ret));
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('z'+i,0);
          }
          else {
        $api.setStorage('z'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });

}

function myArraysum_arr_list7(myArray,i)
{
  //console.log(myArray);

console.log(myArray);
          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
          // deliver: $api.getStorage('usid'),
            fromDistrict: $api.getStorage('fromDistrict'),
           begintime:myArray,
           //endtime:add_time(myArray),
           endtime:myArray,
            remark:1

         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
        console.log(JSON.stringify(ret));
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('z'+i,0);
          }
          else {
        $api.setStorage('z'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });

}

function myArraysum_arr_list5(myArray,i)
{
  //console.log(myArray);


          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
           sandboatId: $api.getStorage('sandboatId'),
           begintime:myArray,
           endtime:myArray,
            remark:1

         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('z'+i,0);
          }
          else {
        $api.setStorage('z'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });

}

function myArraysum_arr_list4(myArray,i)
{
  //console.log(myArray);


          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
          boatId: $api.getStorage('boatId'),
           begintime:myArray,
          endtime:myArray,
           remark:1

         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('z'+i,0);
          }
          else {
        $api.setStorage('z'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });

}

function myArraysum_arr_list3(myArray,i)
{
  //console.log(myArray);


          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
      toDistrict: $api.getStorage('toDistrict'),
           begintime:myArray,
          endtime:myArray,
           remark:1

         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('z'+i,0);
          }
          else {
        $api.setStorage('z'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });

}

function myArraysum_arr(myArray)
{
  var j=0;
  for (i = 0; i < myArray.length; i++) {
// console.log($api.getStorage('usid'));
// console.log($api.getStorage('ucsc06id'));
// console.log(myArray[i]);
// console.log(add_time(myArray[i]));

        if($api.getStorage('uroles')=='采砂船管理员')
        {
        myArraysum_arr_list6(myArray[i],i);
        }

        if($api.getStorage('uroles')=='采区负责人')
        {
        myArraysum_arr_list7(myArray[i],i);
        }

        if($api.getStorage('uroles')=='采砂船船主')
        {
          myArraysum_arr_list5(myArray[i],i);
        }
        if($api.getStorage('uroles')=='运砂船船主')
        {
            myArraysum_arr_list4(myArray[i],i);
        }
        if($api.getStorage('uroles')=='砂场收货员')
        {

        myArraysum_arr_list3(myArray[i],i);
        }
        if($api.getStorage('uroles')=='二级砂厂负责人')
        {

        myArraysum_arr_list3(myArray[i],i);
        }

        if($api.getStorage('uroles')=='采运船主')
        {

          myArraysum_arr_list5(myArray[i],i);
        }

        j=j+1;
  }
    console.log(j);
//if(j==myArray.length)
//{
  // setTimeout(function(){
  //    setrez();
  //  }, 1800);
//}

  // setTimeout(function(){
  //    setrez();
  //  }, 1900);

}


function myArraycount_arr_list6(myArray,i)
{
  //console.log(myArray);

      api.ajax({
    url: functionURL + 'wayBillScreen/getCount.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
     values: {
       //deliver: $api.getStorage('usid'),
       sandboatId: $api.getStorage('ucsc06id'),
       begintime:myArray,
       endtime:myArray,
       remark:1

     },
     files: {
         file: 'fs://a.gif'
     }
    }
    }, function(ret, err) {
    //if(ret['sum(real_weight)'])
console.log(JSON.stringify(ret));
       if(ret['count']==null)
    {

    $api.setStorage('z1'+i,0);
    }
    else {
$api.setStorage('z1'+i,ret['count']);
    }
  //  $api.setStorage('z1'+i,ret['count']);

    //arr_sum[i]=ret;


    });


}
function myArraycount_arr_list7(myArray,i)
{
  //console.log(myArray);

      api.ajax({
    url: functionURL + 'wayBillScreen/getCount.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
     values: {
       //deliver: $api.getStorage('usid'),
         fromDistrict: $api.getStorage('fromDistrict'),

       begintime:myArray,
       endtime:myArray,
        remark:1

     },
     files: {
         file: 'fs://a.gif'
     }
    }
    }, function(ret, err) {
    //if(ret['sum(real_weight)'])
console.log(JSON.stringify(ret));
       if(ret['count']==null)
    {

    $api.setStorage('z1'+i,0);
    }
    else {
$api.setStorage('z1'+i,ret['count']);
    }
  //  $api.setStorage('z1'+i,ret['count']);

    //arr_sum[i]=ret;


    });


}

function myArraycount_arr_list5(myArray,i)
{
  //console.log(myArray);

      api.ajax({
    url: functionURL + 'wayBillScreen/getCount.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
     values: {
 sandboatId: $api.getStorage('sandboatId'),
       begintime:myArray,
       endtime:myArray,
        remark:1

     },
     files: {
         file: 'fs://a.gif'
     }
    }
    }, function(ret, err) {
    //if(ret['sum(real_weight)'])


     if(ret['count']==null)
    {

    $api.setStorage('z1'+i,0);
    }
    else {
$api.setStorage('z1'+i,ret['count']);
    }

    //arr_sum[i]=ret;


    });


}

function myArraycount_arr_list4(myArray,i)
{
  //console.log(myArray);

      api.ajax({
    url: functionURL + 'wayBillScreen/getCount.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
     values: {
    boatId: $api.getStorage('boatId'),
       begintime:myArray,
      endtime:myArray,
       remark:1

     },
     files: {
         file: 'fs://a.gif'
     }
    }
    }, function(ret, err) {
    //if(ret['sum(real_weight)'])


     if(ret['count']==null)
    {

    $api.setStorage('z1'+i,0);
    }
    else {
$api.setStorage('z1'+i,ret['count']);
    }

    //arr_sum[i]=ret;


    });


}

function myArraycount_arr_list3(myArray,i)
{
  //console.log(myArray);

      api.ajax({
    url: functionURL + 'wayBillScreen/getCount.json',
    method: 'get',
    headers:
    {

      login_token:$api.getStorage('loginToken')
    },
    data: {
     values: {
      toDistrict: $api.getStorage('toDistrict'),
       begintime:myArray,
      endtime:myArray,
       remark:1

     },
     files: {
         file: 'fs://a.gif'
     }
    }
    }, function(ret, err) {
    //if(ret['sum(real_weight)'])
// console.log("砂厂");
// console.log(JSON.stringify(ret));


   if(ret['count']==null)
    {

    $api.setStorage('z1'+i,0);
    }
    else {
$api.setStorage('z1'+i,ret['count']);
    }

    //arr_sum[i]=ret;


    });


}

function myArraycount_arr(myArray)
{
    var j=0;
  console.log(myArray.length);
  for (i = 0; i < myArray.length; i++) {
// console.log($api.getStorage('usid'));
// console.log($api.getStorage('ucsc06id'));
// console.log(myArray[i]);
// console.log(add_time(myArray[i]));

if($api.getStorage('uroles')=='采砂船管理员')
{
    myArraycount_arr_list6(myArray[i],i);
}

if($api.getStorage('uroles')=='采区负责人')
{
    myArraycount_arr_list7(myArray[i],i);
}

if($api.getStorage('uroles')=='采砂船船主')
{
    myArraycount_arr_list5(myArray[i],i);
}
if($api.getStorage('uroles')=='运砂船船主')
{
    myArraycount_arr_list4(myArray[i],i);
}
if($api.getStorage('uroles')=='砂场收货员')
{

    myArraycount_arr_list3(myArray[i],i);
}
if($api.getStorage('uroles')=='二级砂厂负责人')
{

myArraycount_arr_list3(myArray[i],i);
}
if($api.getStorage('uroles')=='采运船主')
{

myArraycount_arr_list5(myArray[i],i);
}

j=j+1;
  }
  console.log(j);
//  if(j==myArray.length)
//  {
    // setTimeout(function(){
    //    setrez1();
    //  }, 1800);
//  }
  // setTimeout(function(){
  //    setrez1();
  //  }, 1900);

}
