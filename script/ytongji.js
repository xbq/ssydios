//月统计

function ymyArraysum_arr_list6(myArray,i)
{
  //console.log(myArray);

  if(myArray[0]!=0)
  {
          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
           //deliver: $api.getStorage('usid'),
           sandboatId: $api.getStorage('ucsc06id'),
           begintime:myArray[0],
           endtime:myArray[1],
            remark:1

         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
          console.log(JSON.stringify(ret));

        //if(ret['sum(real_weight)'])
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('yz'+i,0);
          }
          else {
        $api.setStorage('yz'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });
      }
      else {
        $api.setStorage('yz'+i,0);
      }

}

function ymyArraysum_arr_list7(myArray,i)
{
  //console.log(myArray);

  if(myArray[0]!=0)
  {
          api.ajax({
        url: functionURL + 'wayBillScreen/getSum.json',
        method: 'get',
        headers:
        {

          login_token:$api.getStorage('loginToken')
        },
        data: {
         values: {
           //deliver: $api.getStorage('usid'),
          fromDistrict: $api.getStorage('fromDistrict'),
           begintime:myArray[0],
           endtime:myArray[1],
 remark:1
         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
          console.log(JSON.stringify(ret));

        //if(ret['sum(real_weight)'])
        //console.log(JSON.stringify(ret['sum(real_weight)']));


          if(ret['sum(real_weight)']==null)
          {

          $api.setStorage('yz'+i,0);
          }
          else {
        $api.setStorage('yz'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });
      }
      else {
        $api.setStorage('yz'+i,0);
      }

}

function ymyArraysum_arr_list5(myArray,i)
{
  //console.log(myArray);
  if(myArray[0]!=0)
    {

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
           begintime:myArray[0],
           endtime:myArray[1],
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

          $api.setStorage('yz'+i,0);
          }
          else {
        $api.setStorage('yz'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });
      }
      else {
              $api.setStorage('yz'+i,0);
      }

}

function ymyArraysum_arr_list4(myArray,i)
{
  //console.log(myArray);


  if(myArray[0]!=0)
    {

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
           begintime:myArray[0],
             endtime:myArray[1],
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

          $api.setStorage('yz'+i,0);
          }
          else {
        $api.setStorage('yz'+i,ret['sum(real_weight)']);
          }
        //arr_sum[i]=ret;


        });
      }
      else {
        $api.setStorage('yz'+i,0);
      }

}

function ymyArraysum_arr_list3(myArray,i)
{
  //console.log(myArray);
      if(myArray[0]!=0)
        {

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
                 begintime:myArray[0],
                 endtime:myArray[1],
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

                $api.setStorage('yz'+i,0);
                }
                else {
              $api.setStorage('yz'+i,ret['sum(real_weight)']);
                }
              //arr_sum[i]=ret;


              });

        }
        else {

          $api.setStorage('yz'+i,0);
        }



}

function ymyArraysum_arr(myArray)
{
  // $api.rmStorage('yz0');
  // $api.rmStorage('yz1');
  // $api.rmStorage('yz2');
  // $api.rmStorage('yz3');
  // $api.rmStorage('yz4');
  // $api.rmStorage('yz5');

  for (i = 0; i < myArray.length; i++) {
// console.log($api.getStorage('usid'));
// console.log($api.getStorage('ucsc06id'));
// console.log(myArray[i]);
// console.log(add_time(myArray[i]));

        if($api.getStorage('uroles')=='采砂船管理员')
        {
        ymyArraysum_arr_list6(myArray[i],i);
        }
        if($api.getStorage('uroles')=='采区负责人')
        {
        ymyArraysum_arr_list7(myArray[i],i);
        }

        if($api.getStorage('uroles')=='采砂船船主')
        {
          ymyArraysum_arr_list5(myArray[i],i);
        }
        if($api.getStorage('uroles')=='运砂船船主')
        {
            ymyArraysum_arr_list4(myArray[i],i);
        }
        if($api.getStorage('uroles')=='砂场收货员')
        {

        ymyArraysum_arr_list3(myArray[i],i);
        }
        if($api.getStorage('uroles')=='二级砂厂负责人')
        {

        ymyArraysum_arr_list3(myArray[i],i);
        }

        if($api.getStorage('uroles')=='采运船主')
        {
          ymyArraysum_arr_list5(myArray[i],i);
        }
  }

  // setTimeout(function(){
  //    ysetrez();
  //  }, 1800);

}


function ymyArraycount_arr_list6(myArray,i)
{
  console.log(myArray);
//  console.log(t_todaa(myArray[1]));
      if(myArray[0]!=0)
        {
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
           begintime:myArray[0],
           endtime:myArray[1],
 remark:1
         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
console.log(JSON.stringify(ret));
        if(ret['count']==0)
        {

        $api.setStorage('yz1'+i,0);
        }
        else {
  $api.setStorage('yz1'+i,ret['count']);
        }


        //arr_sum[i]=ret;


        });
    }
    else {

      $api.setStorage('yz1'+i,0);
    }

}

function ymyArraycount_arr_list7(myArray,i)
{
  console.log(myArray);
//  console.log(t_todaa(myArray[1]));
      if(myArray[0]!=0)
        {
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
           begintime:myArray[0],
           endtime:myArray[1],
 remark:1
         },
         files: {
             file: 'fs://a.gif'
         }
        }
        }, function(ret, err) {
        //if(ret['sum(real_weight)'])
console.log(JSON.stringify(ret));
        if(ret['count']==0)
        {

        $api.setStorage('yz1'+i,0);
        }
        else {
  $api.setStorage('yz1'+i,ret['count']);
        }


        //arr_sum[i]=ret;


        });
    }
    else {

      $api.setStorage('yz1'+i,0);
    }

}

function ymyArraycount_arr_list5(myArray,i)
{
  //console.log(myArray);

      if(myArray[0]!=0)
        {
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
     begintime:myArray[0],
       endtime:myArray[1],
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

        $api.setStorage('yz1'+i,0);
        }
        else {
  $api.setStorage('yz1'+i,ret['count']);
        }


        //arr_sum[i]=ret;


        });
    }
    else {

      $api.setStorage('yz1'+i,0);
    }

}

function ymyArraycount_arr_list4(myArray,i)
{
  //console.log(myArray);
        if(myArray[0]!=0)
          {
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
          begintime:myArray[0],
     endtime:myArray[1],
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

          $api.setStorage('yz1'+i,0);
          }
          else {
    $api.setStorage('yz1'+i,ret['count']);
          }


          //arr_sum[i]=ret;


          });
      }
      else {

        $api.setStorage('yz1'+i,0);
      }

}

function ymyArraycount_arr_list3(myArray,i)
{
  //console.log(myArray);

      if(myArray[0]!=0)
        {
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
          begintime:myArray[0],
       endtime:myArray[1],
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

        $api.setStorage('yz1'+i,0);
        }
        else {
  $api.setStorage('yz1'+i,ret['count']);
        }


        //arr_sum[i]=ret;


        });
    }
    else {

      $api.setStorage('yz1'+i,0);
    }

}

function ymyArraycount_arr(myArray)
{

  // $api.rmStorage('yz10');
  // $api.rmStorage('yz11');
  // $api.rmStorage('yz12');
  // $api.rmStorage('yz13');
  // $api.rmStorage('yz14');
  // $api.rmStorage('yz15');

  for (i = 0; i < myArray.length; i++) {
// console.log($api.getStorage('usid'));
// console.log($api.getStorage('ucsc06id'));
// console.log(myArray[i]);
// console.log(add_time(myArray[i]));

if($api.getStorage('uroles')=='采砂船管理员')
{
    ymyArraycount_arr_list6(myArray[i],i);
}

if($api.getStorage('uroles')=='采区负责人')
{
    ymyArraycount_arr_list7(myArray[i],i);
}


if($api.getStorage('uroles')=='采砂船船主')
{
    ymyArraycount_arr_list5(myArray[i],i);
}
if($api.getStorage('uroles')=='运砂船船主')
{
    ymyArraycount_arr_list4(myArray[i],i);
}
if($api.getStorage('uroles')=='砂场收货员')
{

    ymyArraycount_arr_list3(myArray[i],i);
}
if($api.getStorage('uroles')=='二级砂厂负责人')
{

    ymyArraycount_arr_list3(myArray[i],i);
}
if($api.getStorage('uroles')=='采运船主')
{
    ymyArraycount_arr_list5(myArray[i],i);
}
  }


  // setTimeout(function(){
  //    ysetrez1();
  //  }, 1800);

}


// function GetDayaa(year, month, day)
//     {
//         var today=new Date(year, month-1 ,day);
//         var yesterday_milliseconds=today.getTime()-1000*60*60*24;
//
//         var yesterday=new Date();
//         yesterday.setTime(yesterday_milliseconds);
//
//         var strYear=yesterday.getFullYear();
//         var strDay=yesterday.getDate();
//         var strMonth=yesterday.getMonth()+1;
//         if(strMonth<10)
//         {
//             strMonth="0"+strMonth;
//         }
//         var strYesterday=strYear+"-"+strMonth+"-"+strDay;
//         //alert(strYesterday);
//         return strYesterday;
//     }
//
//     function t_todaa(mm)
//     {
//        var arr = mm.split("-");
//
//      GetDayaa(arr[0],arr[1],arr[2]);
//
//     }
