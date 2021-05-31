// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  const ret = parseInt(x.toString().split('').reverse().join(''))
  if (ret >= 0x7FFFFFFF) return 0;
  return x > 0 ? ret : -ret;
};
