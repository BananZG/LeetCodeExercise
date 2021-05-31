// https://leetcode.com/problems/median-of-two-sorted-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
  const t = [...nums1, ...nums2];
  const length = t.length;
  if (length < 2) {
      return length < 1 ? 0 : t[0];
  }
  t.sort((a,b)=>a-b);
  const m = length / 2;
  if (m % 1 != 0) {
      return t[Math.floor(m)];
  }
  return (t[m-1] + t[m]) / 2;
};
