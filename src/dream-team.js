const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 if (!Array.isArray(members)) return false;
 let dreamTeam = '';
 members.forEach(member => {
   if(typeof(member) === 'string'){
     dreamTeam += member.match(/[a-zA-Z]{1}/);
   }
 });
 return dreamTeam.toUpperCase().split('').sort().join('');
};
