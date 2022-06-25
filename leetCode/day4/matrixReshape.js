/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
//  在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

//  给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

//  重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

//  如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

let mat = [
        [1, 2, 3, 4],
        [3, 4, 4, 4],
        [5, 6, 5, 4]
    ],
    r = 4,
    c = 3
var matrixReshape = function(mat, r, c) {
    if (mat.flat(Infinity).length != r * c) return mat
    let newArray = []
    let arr = mat.flat(Infinity)
    for (let i = 0; i < r; i++) {
        if (i == 0) {
            newArray.push(arr.slice(0, c))
        } else {
            newArray.push(arr.slice(i * c, (i + 1) * c))
        }

    }
    return newArray


};
console.log(matrixReshape(mat, r, c))
    // 输入：mat = [[1,2],[3,4],[5,6]], r = 2, c = 3
    // 输出：[[1,2],[3,4],[5,6]]