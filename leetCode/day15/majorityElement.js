/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素


 */
let nums = [2, 2, 1, 1, 1, 2, 2]
var majorityElement = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let count = map.get(nums[i])
            map.set(nums[i], count + 1)
        } else {
            map.set(nums[i], 1)
        }
    }
    for (const [key, value] of map) {
        if (value > nums.length / 2) {
            return key
        }
    }
};
console.log(majorityElement(nums))