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
  const check = (i1 = 0, i2 = 0, i3 = 0) => {
    if (i3 === s3.length) {
      return true;
    }
    if (i1 < s1.length && s3[i3] === s1[i1] && check(i1 + 1, i2, i3 + 1)) {
      return true;
    }
    if (i2 < s2.length && s3[i3] === s2[i2] && check(i1, i2 + 1, i3 + 1)) {
      return true;
    }
    return false;
  };
  return check();
};

const test = (func, target, ...input) => {
  const ret = func(...input);
  console.log(`Check ${ret} === ${target}, passed: ${ret === target}`)
}

test(isInterleave, true, "aabcc", "dbbca", "aadbbcbcac");
test(isInterleave, false, "aabcc", "dbbca", "aadbbbaccc");
test(isInterleave, true, "", "", "");
