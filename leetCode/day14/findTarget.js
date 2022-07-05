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
 * @param {number} k
 * @return {boolean}
 */
var find = function(root, k, set) {
    if (!root) {
        return false;
    }
    if (set.has(k - root.val)) {
        return true;
    }
    set.add(root.val);
    return find(root.left, k, set) || find(root.right, k, set);


}
var findTarget = function(root, k) {
    let set = new Set()

    return find(root, k, set)


};