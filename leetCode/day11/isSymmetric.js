/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var compare = function (l, r) {
  //当 两个节点不相等 或其中一个为结尾的时候 结束循环
  if (!l && !r) return true;
  if (!l || !r) return false;
  return (
    l.val === r.val && compare(l.left, r.right) && compare(l.right, r.left)
  );
};
var isSymmetric = function (root) {
  return compare(root, root);
};
