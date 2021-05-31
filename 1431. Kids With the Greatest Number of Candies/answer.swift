// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
class Solution {
    func kidsWithCandies(_ candies: [Int], _ extraCandies: Int) -> [Bool] {
        let max = candies.max() ?? 0
        var ret: [Bool] = []
        for e in candies {
            ret.append(e + extraCandies >= max)
        }
        return ret
    }
}
