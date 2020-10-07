const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== "string" || isNaN(Number(sampleActivity)) || Number(sampleActivity) <= 0 || Number(sampleActivity) >= 15)
    return false;
  let sA = Number(sampleActivity);
  let t = Math.abs((Math.log(sA / MODERN_ACTIVITY) * HALF_LIFE_PERIOD) / 0.693);
  return Math.ceil(t)
};
