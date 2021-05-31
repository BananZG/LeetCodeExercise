// https://leetcode.com/problems/sort-list/
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func sortList(_ head: ListNode?) -> ListNode? {
        var current = head
        var list: [ListNode] = []
        while let temp = current {
            list.append(temp)
            current = temp.next
            temp.next = nil
        }
        let sorted = list.sorted(by: { $0.val < $1.val })
        var last: ListNode?
        let newHead = sorted.first
        for e in sorted {
            if last != nil { last?.next = e }
            last = e
        }
        return newHead
    }
}
