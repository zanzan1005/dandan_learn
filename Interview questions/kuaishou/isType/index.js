function isReg(reg) {
  return Object.prototype.toString.call(obj) === '[Object Date]';
}
function isFunction (func) {
  return typeof func === 'function';
}

function isUndefined(obj) {
  return obj = void 0;
}

function isNull(obj) {
  return obj === null;
}