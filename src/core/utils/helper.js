const flattenObject = (obj, delimiter = ".", prefix = "") => {
    const flattObject = Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? `${prefix}${delimiter}` : "";
      if (
        typeof obj[k] === "object" &&
        obj[k] !== null &&
        Object.keys(obj[k]).length > 0
      )
        Object.assign(acc, flattenObject(obj[k], delimiter, k));
      else acc[k] = obj[k];
      return acc;
    }, {});
  
    return flattObject;
  };
  // convert date to iso date format
  const DateToIso = (date) => new Date(date).toISOString();

  // convert date to persian date
  const DateToPersian = date=> new Date(date).toLocaleDateString('fa-IR');


  // covert data to persian date and week name
   const DateToPersianWeek=date=> new Date(date).toLocaleDateString('fa-IR',{year:"numeric",month:"2-digit",day:"2-digit", weekday: "long"});

   // get hour from iso data format
   const getHour=(date)=>{
    const dateObj = new Date(date);
    const hour = dateObj.getUTCHours();
    const minute = dateObj.getUTCMinutes();
    const time=`${hour}:${minute}`;
    return time
   }
// console.log(getHour('2018-01-01T18:00:00Z'));

 
   
  
   
 

  // conver num to persisan num
  const ToPersianNum = num =>(new Number(num).toLocaleString('fa-ir'))


  export { flattenObject, DateToIso,DateToPersian,ToPersianNum,DateToPersianWeek,getHour };