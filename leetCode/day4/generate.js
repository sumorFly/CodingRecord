/**
 * @param {number} numRows
 * @return {number[][]}
 */
//  给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。

//  在「杨辉三角」中，每个数是它左上方和右上方的数的和。
var generate = function(numRows) {
    let arr = []
    for (let i = 1; i <= numRows; i++) {

        if (i > 2) {

            let subArr = new Array(i).fill(1)
            subArr.map(
                (item, index) => {
                    if (index > 0 && index < subArr.length - 1) {
                        subArr[index] = arr[i - 2][index - 1] + arr[i - 2][index]

                    }
                }
            )
            arr.push(subArr)

        } else {
            arr.push(new Array(i).fill(1))

        }

    }
    return arr
};
console.log(generate(5))