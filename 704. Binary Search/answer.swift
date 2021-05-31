// https://leetcode.com/problems/binary-search/
class Solution {
    func search(_ nums: [Int], _ target: Int) -> Int {
        return nums.firstIndex(of: target) ?? -1
    }
}
