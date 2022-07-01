/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * } 左 根 右
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const res = []
    trans(root, res)
    return res
};

var trans = function(root, res) {
    if (!root) return
    trans(root.left, res)
    res.push(root.val)
    trans(root.right, res)


}