// https://leetcode.com/problems/two-sum/

class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var tb: [Int:Int] = [:]
        for i in 0..<nums.count {
            tb[nums[i]] = i
        }
        for i in 0..<nums.count {
            if let j = tb[target-nums[i]], j != i {
                return [i, j]
            }
        }
        return [-1, -1]
    }
}
