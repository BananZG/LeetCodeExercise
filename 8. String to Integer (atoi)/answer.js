// https://leetcode.com/problems/string-to-integer-atoi/
/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
  const max = 0x80000000;
  let ret = '';
  let negative = null;
  for(const c of s.trim()) {
      if (c === '+') {
          if (negative !== null) {
              break;
          }
          negative = false;
      }
      else if (c === '-') {
          if (negative !== null) {
              break;
          }
          negative = true;
      }
      else if (c >= '0' && c <= '9') {
          if (negative === null) {
              negative = false;
          }
          ret += c;
      } else {
          break;
      }
  }
  return negative ? -Math.min(ret, max) : Math.min(ret, max - 1);
};
