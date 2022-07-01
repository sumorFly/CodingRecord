/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const res = []
    trans(root, res);

    return res;
};
var trans = function(root, res) {

    if (!root) return;
    res.push(root.val);
    trans(root.left, res);
    trans(root.right, res);

}

// 前序遍历是指从中节点，然后遍历左节点=》右节点，