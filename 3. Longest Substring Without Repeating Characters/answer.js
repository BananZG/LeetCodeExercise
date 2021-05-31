// https://leetcode.com/problems/longest-substring-without-repeating-characters/
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  const length = s.length;
  let res = 0;
  for(let i = 0; i < length; ++i) {
      if (length - i + 1 < res) {
          return res;
      }
      const target = [];
      for(let j = i; j < length; ++j) {
          const c = s.charCodeAt(j);
          if (target[c]) {
              break;
          }
          res = Math.max(res, j - i + 1);
          target[c] = true;
      }
  }
  return res;
};
