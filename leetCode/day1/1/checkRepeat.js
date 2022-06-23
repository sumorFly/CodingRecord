// 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 新建一个数组存放遍历的的元素，当前元素在新数组中无法查询的时候，就
const containsDuplicate = function(nums) {
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        if (arr.includes(nums[i])) {
            return true
        } else {

            arr.push(nums[i])
        }
    }
    return false
};

// 其他思路
/**
 * 1.通过对数组排序后，判断相邻数字是否相等
 * 2.使用hash表
 * 3.使用set去重，判断set后的数组的长度是否有变化
 */

const containsDuplicate2 = function(nums) {
    let newArray = nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (newArray[i] === newArray[i + 1]) {
            return true
        }
    }
    return false
}

const containsDuplicate3 = function(nums) {
    let set = new Set()
    for (const x of nums) {
        if (set.has(x)) {
            return true
        }
        set.add(x)
    }
    return false
}

const containsDuplicate4 = function(nums) {
    return Array.from(new Set(nums)).length < nums.length

}