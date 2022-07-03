var haspathsum = function (root, targetsum) {
  if (!root) return false;
  if (!root.left && !root.right) {
    if (targetsum === root.val) return true;
    return false;
  }
  return (
    hasPathSum(root.left, targetsum - root.val) ||
    hasPathSum(root.right, targetsum - root.val)
  );
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。

叶子节点 是指没有子节点的节点

 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

var hasPathSum = function(root, targetsum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    if (targetsum === root.val) return true;
    return false;
  }

  return (
    hasPathSum(root.left, targetsum - root.val) ||
    hasPathSum(root.right, targetsum - root.val)
  );
};