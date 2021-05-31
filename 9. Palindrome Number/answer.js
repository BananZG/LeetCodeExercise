// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  const y = parseInt(x.toString().split('').reverse().join(''));
  return x - y === 0;
};
