const moment = require('moment')

exports.doNothing = doNothing;
function doNothing() {}

exports.hasKeys = function(object) {
  for (var key in object) return true;
  return false;
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
exports.isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};


exports.log = function(level, msg, fields) {
  const RFC_3339 = 'YYYY-MM-DDTHH:mm:ssZ'
  console.log(
      JSON.stringify({
          level,
          msg,
          time: moment.utc().format(RFC_3339),
          ...fields
      })
  )
}
