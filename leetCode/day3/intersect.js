/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let arr = []

    for (let i = 0; i < nums2.length; i++) {
        if (nums1.indexOf(nums2[i]) != -1) {
            arr.push(nums2[i])
            nums1.splice(nums1.indexOf(nums2[i]), 1)

        }
    }
    return arr
};

// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
let nums1 = [1, 2, 2, 1],
    nums2 = [2, 2]
console.log(intersect(nums1, nums2))