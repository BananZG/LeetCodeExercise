// https://leetcode.com/problems/add-two-numbers/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 const getNum = (l) => {
  if (!l) {
      return '';
  }
  return `${getNum(l.next)}${l.val}`;
}

const numToNode = (n) => {
  if (n.length <= 0) {
      return null;
  }
  return new ListNode(parseInt(n.slice(-1)), numToNode(n.slice(0, -1)))
};

const addTwoNumbers = function(l1, l2) {
  const sum = BigInt(getNum(l1)) + BigInt(getNum(l2));
  return numToNode(sum.toString());
};
