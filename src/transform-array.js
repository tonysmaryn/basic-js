const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
}

const out = arr.slice();
const discarding = '';

for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
        case '--discard-next':
            if (i < out.length - 1) {
                out[i + 1] = discarding;
            }
            out[i] = discarding;
            break;
        case '--discard-prev':
            if (i > 0) {
                out[i - 1] = discarding;
            }
            out[i] = discarding;
            break;
        case '--double-next':
            if (i < out.length - 1) {
                out[i] = out[i + 1];
            } else {
                out[i] = discarding;
            }
            break;
        case '--double-prev':
            if (i > 0) {
                out[i] = out[i - 1];
            } else {
                out[i] = discarding;
            }
    }
}

return out.filter(el => el !== discarding);
};
