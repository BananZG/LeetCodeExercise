// https://leetcode.com/problems/open-the-lock/

/**
 * @param {string} current
 * @param {number} length
 * @return {string[]}
 */
const rotate = (current, length) => {
  const ret = [];
  for (let i = 0; i < length; ++i) {
    const n = parseInt(current[i]);
    const prefix = current.substring(0, i), suffix = current.substring(i + 1);
    const next = current[i] === '9' ? '0' : (n + 1)
    const prev = current[i] === '0' ? '9' : (n - 1);
    ret.push(prefix + next + suffix);
    ret.push(prefix + prev + suffix);
  }
  return ret;
};

/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = (deadends, target) => {
  const current = '0000';
  const length = current.length;
  const queue = [current];
  const memo = { current: true };
  deadends.forEach((e) => (memo[e] = true));
  // recurise wont work as we want breath first -> lesser turns to be processed first;
  let moves = -1;
  while (queue.length) {
    const size = queue.length;
    moves++;
    for (let i = 0; i < size; ++i) {
      const current = queue.shift();
      if (current === target) {
        return moves;
      }
      if (memo[current]) {
        continue;
      }
      memo[current] = true;
      for (const n of rotate(current, length)) {
        queue.push(n);
      }
    }
  }
  return -1;
};

const { test } = require('../util');

test(openLock, 6, ["0201", "0101", "0102", "1212", "2002"], "0202");
test(openLock, 1, ["8888"], "0009");
test(
  openLock,
  -1,
  ["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"],
  "8888"
);
test(openLock, -1, ["0000"], "8888");
