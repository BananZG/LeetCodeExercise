// https://leetcode.com/problems/maximum-area-of-a-piece-of-cake-after-horizontal-and-vertical-cuts/
/**
 * Given a rectangular cake with height h and width w, and two arrays of integers horizontalCuts and verticalCuts where horizontalCuts[i] is the distance from the top of the rectangular cake to the ith horizontal cut and similarly, verticalCuts[j] is the distance from the left of the rectangular cake to the jth vertical cut.
 *
 * Return the maximum area of a piece of cake after you cut at each horizontal and vertical position provided in the arrays horizontalCuts and verticalCuts. Since the answer can be a huge number, return this modulo 10^9 + 7.
 */

/**
 * Vertical boundary affects the width
 * Horizontal boundary affects the height
 *
 * 1. We will get max height and max width separately.
 * 2. Sort vertical boundaries in ascending order.
 * 3. Iterate through vertical boundaries from start. At every boundary i, we will get
 * new width between previous boundary and current boundary. We update maxWidth if necessary.
 * Important thing to note here is that we should consider the sides of rectangle as boundaries
 * as well (that means 0 and w).
 * Hence, we add w to verticalCuts because it is a vertical boundary.
 * 4. Do step 2 and 3 for horizontal boundaries and get maxHeight.
 * 5. Return maxWidth * maxHeight.
 * 6. Modulo 10^9+7 (1000000007) as per question required to prevent integer overflows - Explains at https://www.geeksforgeeks.org/modulo-1097-1000000007/
 */

/**
 * @param {number[]} cuts
 * @param {number} size
 * @return {number}
 */
const maxFinder = (cuts, size) =>
  Math.max(
    ...cuts
      .sort((x, y) => x - y) // sort the cuts
      .concat([size]) // add the last
      .map((cut, i) => (i === 0 ? cut - 0 : cut - cuts[i - 1]))
  ); // if the index is 0 then subtract 0, else subtract pairs.
  
/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
const maxArea = (h, w, horizontalCuts, verticalCuts) =>
  (maxFinder(horizontalCuts, h) * maxFinder(verticalCuts, w)) % (10 ** 9 + 7);

const test = (func, target, ...input) => {
  const ret = func(...input);
  console.log(`Check ${ret} === ${target}, passed: ${ret === target}`);
};

test(maxArea, 4, 5, 4, [1, 2, 4], [1, 3]);
test(maxArea, 9, 5, 4, [3], [3]);
