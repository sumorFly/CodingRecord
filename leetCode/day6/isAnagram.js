/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//  给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

//  注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。


let s = "anagramd",
    t = "nagaramf"
var isAnagram = function(s, t) {
    //1. 
    //  return s.length === t.length && [...s].sort().join("") == [...t].sort().join("")
    //   2.
    //     if (s.length != t.length) return false
    //     let aMap = new Map()
    //     let bMap = new Map()
    //     for (let i = 0; i < s.length; i++) {
    //         if (aMap.has(s[i])) {
    //             const count = aMap.get(s[i])
    //             aMap.set(s[i], count + 1)
    //         } else {
    //             aMap.set(s[i], 1)
    //         }
    //     }
    //     for (let i = 0; i < t.length; i++) {
    //         if (bMap.has(t[i])) {
    //             const count = bMap.get(t[i])
    //             bMap.set(t[i], count + 1)
    //         } else {
    //             bMap.set(t[i], 1)
    //         }
    //     }
    //     for (let i = 0; i < s.length; i++) {
    //         if (!bMap.get(s[i])) return false
    //         if ((bMap.get(s[i]) != aMap.get(s[i]))) {
    //             return false
    //         }

    // }
    // return true
    // 3

    if (s.length != t.length) return false
    let aMap = new Map()
    for (let i = 0; i < s.length; i++) {
        if (aMap.has(s[i])) {
            const count = aMap.get(s[i])
            aMap.set(s[i], count + 1)
        } else {
            aMap.set(s[i], 1)
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (aMap.has(t[i]) && aMap.get(t[i]) > 0) {
            const count = aMap.get(t[i])
            aMap.set(t[i], count - 1)
        } else {
            return false
        }
    }

    return true





};
console.log(isAnagram(s, t))