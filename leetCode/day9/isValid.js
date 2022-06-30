let s = "()[]{}"
var isValid = function(s) {
    const n = s.length;
    if (n % 2 != 0) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    console.log(pairs)
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(ch);
        }
    };
    return !stk.length;
};
console.log(isValid(s))