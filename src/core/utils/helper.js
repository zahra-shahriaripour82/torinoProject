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

  const ToPersianNum = num =>(new Number(num).toLocaleString('fa-ir'))


  export { flattenObject, DateToIso,DateToPersian,ToPersianNum };