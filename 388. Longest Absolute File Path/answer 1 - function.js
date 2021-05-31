// https://leetcode.com/problems/longest-absolute-file-path/
/**
 * @param {string} input
 * @return {number}
 */
 const lengthLongestPath = function(input) {
  let map = {};
  let maxSum = 0;
  for(const path of input.split('\n')) {
    const current = path.split('\t');
    const level = current.length;
    const name = current[current.length - 1];
    if (name.indexOf('.') < 0) {
      map[level] = name;
    }
    else {
      let sum = 0;
      for(var j=1;j<level;j++){
          sum += map[j].length;
          sum += 1;
      }
      sum+=name.length;
      maxSum = Math.max(maxSum,sum);
    }
  }
  return maxSum;
};
