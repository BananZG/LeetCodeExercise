// https://leetcode.com/problems/divide-two-integers/
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

 var divide = function(dividend, divisor) {
  const n = dividend / divisor;
  return n > 0 ? Math.min(Math.floor(n), 0x7FFFFFFF) : Math.max(Math.ceil(n), -0x80000000);
};
