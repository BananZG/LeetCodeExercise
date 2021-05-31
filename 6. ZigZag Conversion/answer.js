// https://leetcode.com/problems/zigzag-conversion/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
  if (numRows <= 1) {
      return s;
  }
  const cap = numRows + numRows - 2;
  const ret = [];
  for(let i = 0; i < s.length; ++i) {
      const r = i % cap;
      const index = r >= numRows ? cap - r : r;
      if (!ret[index]) {
          ret[index] = '';
      }
      ret[index] += s[i];
  }
  return ret.join('');
};
