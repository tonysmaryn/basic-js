const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine) {
    this.machine = machine;
  }

  square() {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let matrix = [];
    matrix[0] = str.split('');
    for (let i = 0; i < 25; i++) {
      let newRow = matrix[i].slice(1);
      newRow.push(str[i]);
      matrix.push(newRow);
    }
    return matrix;
  }

  encrypt(str, keyword) {
    if (typeof (str) === 'undefined' || typeof (keyword) === 'undefined') throw new Error();
    const matrix = this.square();
    let arr = [];
    let newKey = '';
    for (let i = 0; i < Math.ceil(str.length / keyword.length); i++) newKey += keyword;
    str = str.toUpperCase();
    newKey = newKey.toUpperCase();
    let index1, index2;
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (matrix[0].includes(str[i])) {
        index1 = matrix[0].indexOf(str[i], 0);
        index2 = matrix[0].indexOf(newKey[count], 0);
        count++;
        arr.push(matrix[index2][index1]);
      } else {
        arr.push(str[i]);
      }
    }
    return this.machine === false ? arr.reverse().join('') : arr.join('');
  }

  decrypt(str, keyword) {
    if (typeof (str) === 'undefined' || typeof (keyword) === 'undefined') throw new Error();
    const matrix = this.square();
    let arr = [];
    let newKey = '';
    for (let i = 0; i < Math.ceil(str.length / keyword.length); i++) newKey += keyword;
    str = str.toUpperCase();
    newKey = newKey.toUpperCase();
    let index;
    let count = 0;
    for (let n = 0; n < str.length; n++) {
      if (matrix[0].includes(str[n])) {
        index = matrix[0].indexOf(newKey[count], 0);
        count++;
        for (let i = 0; i < matrix.length; i++) {
          if (matrix[i][index] === str[n]) {
            arr.push(matrix[i][0]);
          }
        }
      } else {
        arr.push(str[n]);
      }
    }
    return this.machine === false ? arr.reverse().join('') : arr.join('');
  }
}

module.exports = VigenereCipheringMachine;
