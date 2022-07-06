let nums = [2, 2, 1]
var singleNumber = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.delete(nums[i])
        } else {
            map.set(nums[i], i)

        }
    }
    console.log(map)

    return Array.from(map.keys())[0]
};
console.log(singleNumber(nums))