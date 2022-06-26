/**
 * @param {character[][]} board
 * @return {boolean}
 */
//  请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

//  数字 1-9 在每一行只能出现一次。
//  数字 1-9 在每一列只能出现一次。
//  数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
//   

//  注意：

//  一个有效的数独（部分已被填充）不一定是可解的。
//  只需要根据以上规则，验证已经填入的数字是否有效即可。
//  空白格用 '.' 表示


let board = [
    ["1", "2", ".", ".", ".", ".", "6", ".", "7"],
    [".", ".", ".", ".", ".", ".", ".", ".", "5"],
    [".", ".", "9", ".", "6", ".", "4", ".", "."],
    [".", "6", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "4", ".", ".", "7", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "2"],
    [".", "9", ".", ".", ".", ".", ".", ".", "7"]
]


//自己的解法，通过生成行列的数组 进行比对是否重复 ，十分复杂，运行速度慢
const replace = function(arr) {
    const newArr = arr.filter((item) => item != '.')
    if (Array.from(new Set(newArr)).length < newArr.length) {
        return false
    }
    return true

}


var isValidSudoku = function(board) {
    let newArr = board.flat(Infinity)

    for (let i = 0; i < 9; i++) {

        if (!replace(board[i])) return false

        let col = []
        if (i == 0) {
            col = newArr.filter((item, index) => index % 9 == 0)
        } else {
            col = newArr.filter((item, index) => (index - i) % 9 == 0)
        }
        if (!replace(col)) return false

        for (let j = 0; j < 9; j++) {


            let sub = [] //子表格
            if ((i + 2) % 3 == 0 && (j + 2) % 3 == 0) {
                sub.push(
                    board[i - 1][j - 1], board[i - 1][j], board[i - 1][j + 1],
                    board[i][j - 1], board[i][j], board[i][j + 1],
                    board[i + 1][j - 1], board[i + 1][j], board[i + 1][j + 1]

                )
            }
            if (!replace(sub)) return false

        }

    }

    return true

};



// 借鉴解法，通过对行列块三个哈希表，使用方向判断是否重复
var isValidSudoku1 = function(board) {
    let rows = {}; //行
    let columns = {}; //列
    let boxes = {}; //3*3小方块
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num != '.') { //遇到有效的数字
                let boxIndex = parseInt((i / 3)) * 3 + parseInt(j / 3); // 子数独序号
                if (rows[i + '-' + num] || columns[j + '-' + num] || boxes[boxIndex + '-' + num]) { //重复检测
                    return false;
                }
                // 方向 + 数字 组成唯一键值，若出现第二次，即为重复
                // 更新三个对象
                rows[i + '-' + num] = true;
                columns[j + '-' + num] = true;
                boxes[boxIndex + '-' + num] = true;
            }
        }
    }
    return true;


};
console.log(isValidSudoku1(board))