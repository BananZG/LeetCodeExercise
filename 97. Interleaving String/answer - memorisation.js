// https://leetcode.com/problems/interleaving-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

const isInterleave = (s1, s2, s3) => {
  if (s1.length + s2.length != s3.length) {
    return false;
  }
  const check = (i1 = 0, i2 = 0, i3 = 0, memo = []) => {
    if (i1 === s1.length) {
      return s2.substring(i2) === s3.substring(i3);
    }
    if (i2 === s2.length) {
      return s1.substring(i1) === s3.substring(i3);
    }
    if (memo[i1] && memo[i1][i2] >= 0) {
      return memo[i1][i2];
    }
    let ans = false;
    if (s3[i3] === s1[i1] && check(i1 + 1, i2, i3 + 1, memo)
      || s3[i3] === s2[i2] && check(i1, i2 + 1, i3 + 1, memo)) {
        ans = true;
    }
    if (!memo[i1]) {
      memo[i1] = [];
    }
    memo[i1][i2] = ans;
    return ans;
  };
  return check();
};

const { test } = require('../util');

test(isInterleave, true, "aabcc", "dbbca", "aadbbcbcac");
test(isInterleave, false, "aabcc", "dbbca", "aadbbbaccc");
test(isInterleave, true, "", "", "");
