// https://leetcode.com/problems/shuffle-the-array/
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let ret = [];
    for (let i = 0; i < n; ++i) {
        ret.push(nums[i])
        ret.push(nums[n + i])
    }
    return ret;
};
