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
  
  const DateToIso = (date) => new Date(date).toISOString();
  let today = new Date().toLocaleDateString('fa-IR');
console.log(today);
  export { flattenObject, DateToIso };