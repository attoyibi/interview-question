/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [2, 7, 11, 15]
let target = 9
var twoSum = function (nums, target) {
    let start = nums[0];
    for (let index = 0; index < nums.length; index++) {
        if ((start + nums[index]) === target) {
            console.log('ketemu');
            console.log(start);
            console.log(index);
            return [start, index];
        }
        if (nums.length) {

        }
    }

};
// @lc code=end

twoSum(nums, target);
