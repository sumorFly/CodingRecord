/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。


let ransomNote = "a",
    magazine = "b"
var canConstruct = function(ransomNote, magazine) {
    const m = ransomNote.length
    const n = magazine.length
    if (m > n) return false;
    let aMap = new Map()
    let bMap = new Map()
    for (let i = 0; i < m; i++) {
        if (aMap.has(ransomNote[i])) {
            const count = aMap.get(ransomNote[i])
            aMap.set(ransomNote[i], count + 1)
        } else {
            aMap.set(ransomNote[i], 1)
        }
    }
    for (let i = 0; i < n; i++) {
        if (bMap.has(magazine[i])) {
            const count = bMap.get(magazine[i])
            bMap.set(magazine[i], count + 1)
        } else {
            bMap.set(magazine[i], 1)
        }
    }
    for (let i = 0; i < m; i++) {
        if (!bMap.get(ransomNote[i])) return false
        if ((bMap.get(ransomNote[i]) < aMap.get(ransomNote[i]))) {
            return false
        }

    }
    return true

}
console.log(canConstruct(ransomNote, magazine))