// https://leetcode.com/problems/search-suggestions-system/
/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function (products, searchWord) {
  products.sort();
  const ret = [];
  for(let i = 1, startIndex = 0; i <= searchWord.length; ++i) {
    const sub = searchWord.slice(0, i);
    const res = [];
    while (sub.localeCompare(products[startIndex]) > 0) ++startIndex;
    for(const e of products.slice(startIndex)) {
      if (e.slice(0, i) !== sub || res.length >= 3) break;
      else res.push(e);
    }
    ret.push(res);
  }
  return ret;
};
