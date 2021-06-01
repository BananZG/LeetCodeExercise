// https://leetcode.com/problems/max-area-of-island/
/**
 * @param {number[][]} grid
 * @return {number}
*/
const maxAreaOfIsland = (grid) => {
  const travel = (i, j) => {
    if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) {
      return 0;
    }
    grid[i][j] = 0
    return 1 + travel(i - 1, j) + travel(i, j - 1) + travel(i + 1, j) + travel(i, j + 1);
  };
  let ans = 0;
  const n = grid.length; m = grid[0].length;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (grid[i][j]) {
        ans = Math.max(ans, travel(i, j));
      }
    }
  }
  return ans;
};

const test1 = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]];
const ans1 = 6;
const run1 = maxAreaOfIsland(test1);
console.log(`Test 1 produce ${run1}, expecting ${ans1} : ${run1 === ans1 ? 'correct' : 'incorrect'}`);
