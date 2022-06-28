/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// /将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
let list1 = [1, 2, 4],
    list2 = [1, 3, 4]

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) return null;
    const temp = [];
    //将链表转换为数组
    while (list1 !== null) {
        temp.push(list1.val);
        list1 = list1.next;
    }
    while (list2 !== null) {
        temp.push(list2.val);
        list2 = list2.next;
    }
    temp.sort((a, b) => a - b);
    const head = new ListNode(temp[0]);
    let res = head;
    for (let i = 1; i < temp.length; i++) {
        res.next = new ListNode(temp[i]);
        res = res.next;
    }
    return head;

};
console.log(mergeTwoLists(list1, list2))