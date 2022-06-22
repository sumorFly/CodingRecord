// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

/**
 * @param {number[]} nums
 * @return {number}
 */
const nums = [-1]
const maxSubArray = function(nums) {
    let now = 0;
    let result = nums[0];
    nums.map(item => {
        now = Math.max(now + item, item)
        result = Math.max(now, result)
    })
    return result

};
console.log(maxSubArray(nums))