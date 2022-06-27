/**
 * @param {string} s
 * @return {number}
 */
// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
let s = "leetcod"
var firstUniqChar = function(s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {

        if (map.has(s[i])) {
            const count = map.get(s[i])
            map.set(s[i], count + 1)
        } else {
            map.set(s[i], 1)
        }

    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i
        }

    }
    return -1



};




console.log(firstUniqChar(s))