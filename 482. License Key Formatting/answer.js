// https://leetcode.com/problems/license-key-formatting/
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 const format = (s, k) => {
  if (s.length <= k) {
      return s.slice(0, k);
  }
  return `${s.slice(0, k)}-${format(s.slice(k), k)}`
}

var licenseKeyFormatting = function(s, k) {
  const cleanS = s.split('-').join('').toUpperCase();
  if (cleanS.length <= k) { return cleanS; }
  const part1 = cleanS.length % k;
  if (part1 <= 0) { return format(cleanS, k); }
  return `${cleanS.slice(0, part1)}-${format(cleanS.slice(part1),k)}`
};
