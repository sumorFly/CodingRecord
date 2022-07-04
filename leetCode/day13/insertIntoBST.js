/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * 
 * }
 * 给定二叉搜索树（BST）的根节点 root 和要插入树中的值 value ，将值插入二叉搜索树。 
 * 返回插入后二叉搜索树的根节点。 输入数据 保证 ，新值和原始二叉搜索树中的任意节点值都不同。
 * 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回 任意有效的结果 。
 */
//  左子树（如果存在）上所有节点的值均小于 root.val，右子树（如果存在）上所有节点的值均大于 
// root.val，且它们都是二叉搜索树。



/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (root === null) {
        return new TreeNode(val)
    }

    if (root.val > val) {
        // val 比root值小，对左子树结点进行递归操作
        root.left = insertIntoBST(root.left, val)
    } else if (root.val < val) {
        // val 比root值大，对右子树结点进行递归操作
        root.right = insertIntoBST(root.right, val)
    }

    return root
};