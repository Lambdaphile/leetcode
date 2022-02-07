/**
 * Problem description: https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let a, b, twoSumIndices = [];
  const numsLength = nums.length;

  if (numsLength < 2) return twoSumIndices;

  for (let i = 0; i < numsLength - 1; i++) {
    for (let j = 1; j < numsLength; j++) {
      a = nums[i];
      b = nums[j];

      if (i !== j && a + b === target) {
        twoSumIndices = [i, j];
      }
    }
  }

  return twoSumIndices;
};
