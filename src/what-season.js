const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === null){
    return 'FAIL';
  }
  if (date === undefined){
    return 'Unable to determine the time of year!';
  }
  let month = date.toDateString().split(" ")[1];
  if (month === 'Dec' ||month === 'Jan' || month === 'Feb'){
    return 'winter';
  }
  if (month === 'Mar' ||month === 'Apr' || month === 'May'){
    return 'spring';
  }
  if (month === 'Jun' ||month === 'Jul' || month === 'Aug'){
    return 'summer';
  }
  if (month === 'Sep' ||month === 'Oct' || month === 'Nov'){
    return 'autumn';
  }
};
