/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 通过一边检查map是否有值一边存值
var twoSum = function(nums, target) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        x = target - nums[i]
        if (map.has(x)) {
            return [map.get(x), i]
        }
        map.set(nums[i], i)
    }


};