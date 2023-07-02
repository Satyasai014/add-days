var addDays = require("date-fns/addDays");
let k = function (days) {
  const result = addDays(new Date(2020, 8, 22), days);
  return `${result.getDate()}-${result.getMonth()}-${result.getFullYear()}`;
};
k(5);
module.exports = k;
