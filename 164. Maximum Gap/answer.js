// https://leetcode.com/problems/maximum-gap/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumGap = function(nums) {
  const length = nums.length;
  if (length < 2) {
      return 0;
  }
  nums.sort((a,b) => a - b);
  let ret = 0;
  for(let i = 0; i < length - 1; ++i) {
      const temp = Math.abs(nums[i + 1] - nums[i]);
      if (temp > ret) {
          ret = temp;
      }
  }
  return ret;
};
