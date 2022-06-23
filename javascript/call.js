/**
 *自定义call实现
 * call: call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
 * @param context     this的指向
 * @param args      动态参数
 * 
 * * 判断传入的是否是函数 否抛错
 * 判断是否为undefined 或者null 是>window=>this 
 * 判断是否有参数 有=》传入func无直接调func
 */
Function.prototype.newCall = function(context, ...args) {

    if (typeof context !== "function") {
        throw new TypeError(
            "error"
        );
    }
    if (context === undefined || context === null) {
        context = window;
    } else {
        context = Object(context);
    }
    // 将 func 放入 context内，这样在调用 context[func] 时 this 自然就指向了context
    const func = Symbol();
    context[func] = this;
    let result;
    if (args.length) {
        result = context[func](...args);
    } else {
        result = context[func]();
    }

    delete context[func];

    return result;

}

/**
 * 自定义 apply 
 * apply() 方法调用一个具有给定 this 值的函数，以及以一个数组（或一个类数组对象）的形式提供的参数
 * @param context 
 * @param args
 * 
 * 判断传入的是否是函数 否抛错
 * 判断是否为undefined 或者null 是>window=>this 
 * 判断 参数是否为undefined 或null 是=》调用func 否=判断是否是Array或类Arary  如果不是=》抛锚 是将arg传入func
 */

Function.prototype.newApply = function(context, args) {
    if (typeof context !== "function") {
        throw new TypeError(
            "error"
        );
    }

    if (context === undefined || context === null) {
        context = window;
    } else {
        context = Object(context);
    }

    // 将 func 放入 context内，这样在调用 context[func] 时 this 自然就指向了context
    const func = Symbol();
    context[func] = this;

    let result;

    if (args && typeof args === "object" && "length" in args) {
        result = context[func](...Array.from(args));
    } else if (args === undefined || args === null) {
        result = context[func]();
    } else {
        throw new TypeError("error");
    }

    delete context[func];

    return result;


}



/**
 * bind实现
 * bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
 * @param context
 * @returns {Function}
 * 判断是否是函数 否=》error
 * 判断  参数正常？：将参数作为this:将Windows作为this
 * 创建一个函数 new?实例作为this:context作为this=>拼接参数=》根据this和参数列表调用apply
 * 使用空函数连接
 * 返回函数
 */

Function.prototype.newBind = function(context) {
    // 判断是否是函数 否=》error
    if (typeof context !== "function") {
        throw new TypeError(
            "error"
        );
    }
    if (context === undefined || context === null) {
        context = window;
    } else {
        context = Object(context);
    }

    const func = this;
    const bound = function(...ArgsArray) {
        let isNew = false;

        // 如果 func 不是构造器，直接使用 instanceof 将出错，所以需要用 try...catch 包裹
        try {
            isNew = this instanceof func;
        } catch (error) {}

        return func.apply(isNew ? this : context, args.concat(ArgsArray));
    };

    const Empty = function() {};
    Empty.prototype = this.prototype;
    bound.prototype = new Empty();

    return bound;
}