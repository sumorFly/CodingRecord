/**
 * @param {string} s
 * @return {number}
 */
let s = "l|*e*et|c**o|*de|"


var countAsterisks = function(s) {

    if (!s.includes("*")) return 0
    if (!s.includes('|')) return s.split("*").length - 1
    let news = s.split('|')
    return news.filter((item, index) => index % 2 == 0).join(',').split('*').length - 1
};

console.log(countAsterisks(s))