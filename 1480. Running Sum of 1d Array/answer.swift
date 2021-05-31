// https://leetcode.com/problems/running-sum-of-1d-array/
class Solution {
  func runningSum(_ nums: [Int]) -> [Int] {
      var ret: [Int] = []
      for e in nums {
          ret.append(e + (ret.last ?? 0))
      }
      return ret
  }
}
