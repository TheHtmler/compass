
// Object deep clone
export const objDeepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}


export const convertUTCTimeToLocalTime = (UTCDateString) => {

  if(!UTCDateString){
    return '-';
  }
  function formatFunc(str) {    //格式化显示
    return str > 9 ? str : '0' + str
  }
  var date2 = new Date(UTCDateString);     //这步是关键
  var year = date2.getFullYear();
  var mon = formatFunc(date2.getMonth() + 1);
  var day = formatFunc(date2.getDate());
  var hour = formatFunc(date2.getHours());
  var min = formatFunc(date2.getMinutes());
  var sec = formatFunc(date2.getSeconds())
  var dateStr = year+'-'+mon+'-'+day+' '+hour+':'+min+':'+sec;
  return dateStr;
}