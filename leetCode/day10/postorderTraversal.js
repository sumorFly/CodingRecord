var postorderTraversal = function(root) {
    const res = []
    trans(root, res)
    return res
};
var trans = function(root, res) {
        if (!root) return
        trans(root.left, res)
        trans(root.right, res)
        res.push(root.val)

    }
    // 后序遍历 顺序是左右根