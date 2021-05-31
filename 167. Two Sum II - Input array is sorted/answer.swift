// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
class Solution {
  func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
      var tb: [Int: Int] = [:]
      for i in 0..<numbers.count {
          tb[numbers[i]] = i
      }
      for i in 0..<numbers.count {
          if let j = tb[target - numbers[i]], j != i {
              return [i+1, j+1]
          }
      }
      return [-1, -1]
  }
}
