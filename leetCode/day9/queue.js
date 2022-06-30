// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

// 实现 MyQueue 类：

// void push(int x) 将元素 x 推到队列的末尾
// int pop() 从队列的开头移除并返回元素
// int peek() 返回队列开头的元素
// boolean empty() 如果队列为空，返回 true ；否则，返回 false
// 说明：

// 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可



/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stackPush = [];
    this.stackPop = [];
};
/**
 * push栈向pop栈倒数据,
 * 确保stackPop为空，stackPush一次性倒完
 */
MyQueue.prototype.pushToPop = function() {
        if (this.stackPop.length === 0) {
            while (this.stackPush.length) {
                this.stackPop.push(this.stackPush.pop());
            }
        }
    }
    /**
     * Push element x to the back of queue. 
     * @param {number} x
     * @return {void}
     */
MyQueue.prototype.push = function(x) {
    this.stackPush.push(x);
    this.pushToPop();
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.stackPush.length === 0 && this.stackPop.length === 0) {
        throw Error('Queue is empty!');
    }
    this.pushToPop();
    return this.stackPop.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.stackPush.length === 0 && this.stackPop.length === 0) {
        throw Error('Queue is empty!');
    }
    this.pushToPop();
    // 这里注意一下，用js的shift()方法无法通过，因为题目已经说了
    // 只有用 push to top, peek/pop from top, size, 和 is empty 操作才是合法的。
    return this.stackPop[this.stackPop.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // 当length = 0 时，0 隐式转换为 false，取反为true
    return !this.stackPush.length && !this.stackPop.length;
};