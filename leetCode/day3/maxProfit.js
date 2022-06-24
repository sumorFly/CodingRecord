/**
 * @param {number[]} prices
 * @return {number}
 */


//  给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。

//  你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。

//  返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。


var maxProfit = function(prices) {
    let min;
    let result = 0;
    for (let i = 0; i < prices.length; i++) {
        if (i == 0) {
            min = Math.min(prices[i + 1], prices[i])
            result = 0
        } else {
            min = Math.min(prices[i], min)
            result = Math.max(prices[i] - min, result)
        }




    }
    return result > 0 ? result : 0

};
console.log(maxProfit([7, 6, 4, 3, 1]))