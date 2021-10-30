export default function date(time: any, hasTime: boolean) {
    const months = [
      "janv.",
      "febr.",
      "mart",
      "apr.",
      "maijs",
      "jūn.",
      "jūl.",
      "aug.",
      "sept.",
      "okt.",
      "nov.",
      "dec.",
    ];
    const month = months[time.getMonth()];
  const date = time.getDate(); 
  let hour;
  let minute;
  let formated_time = "";
  if (hasTime) {
    hour = time.getHours();
    //eslint-disable-next-line
    if (hour.toString().length == 1) {
      hour = "0" + hour.toString();
    }
  minute = time.getMinutes();
    //eslint-disable-next-line
    if (minute.toString().length == 1) {
      minute = "0" + minute.toString();
    }
    formated_time = " " + hour + ":" + minute;
  }
  
  const formatedDate =
    date.toString() + "." + month.toString()+ formated_time;
    
    return formatedDate;
  }