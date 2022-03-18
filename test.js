/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {};
  hash[nums[0]] = 0;
  for (let i = 1; i < nums.length; i++) {
    const value = nums[i];
    const result = target - value;
    if (hash[result] !== undefined) {
      return [hash[result], i];
    }
    hash[value] = i;
  }
};

var twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i != j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

const target1 = twoSum([3, 2, 4], 6);
const target2 = twoSum([3, 3], 6);
console.log(target1, target2);
