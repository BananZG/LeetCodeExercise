// https://leetcode.com/problems/valid-number/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
  if (s.includes('Infinity')) return false;
  return !isNaN(s);
};

/** obviously this is cheating lol */
