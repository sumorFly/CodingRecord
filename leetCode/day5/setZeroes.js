/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//  给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法
let matrix = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]

// set最快
var setZeroes = function(matrix) {
    let row = [] //Map() Set()
    let col = [] //Map() Set()

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                row.push(i) //add() set()
                col.push(j) //add() set()
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

            if (row.includes(i) || col.includes(j)) {
                matrix[i][j] = 0
            }

        }
    }


};
setZeroes(matrix)
console.log(matrix)