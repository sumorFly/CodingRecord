/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。

有效 二叉搜索树定义如下：

节点的左子树只包含 小于 当前节点的数。
节点的右子树只包含 大于 当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 限定以 root 为根的子树节点必须满足 max.val > root.val > min.val
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    // 如果是空节点
    if (!root) return true;
    // 当前节点的值大于最小值，小于最大值；（换句话说，当前节点的值大于左子树所有节点的值，小于右子树中所有节点的值 ）
    // 限定左子树的最大值是 root.val，右子树的最小值是 root.val
    return (
        root.val > min &&
        root.val < max &&
        isValidBST(root.left, min, root.val) &&
        isValidBST(root.right, root.val, max)
    );
};