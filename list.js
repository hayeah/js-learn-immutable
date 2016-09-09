const { List } = require("immutable");

// []
let l = List();

// [1, 2, 3]
let list = l.push(1)
         		.push(2)
         		.push(3);

console.log("get(0) 获取链表的第 1 个元素")
console.log(list.get(0));
// 1

console.log("get(2) 获取链表的第 3 个元素")
console.log(list.get(2));
// 3

console.log("get(100) 超过链表长度，返回 undefined");
console.log(list.get(100));
// undefined

console.log("has 检测索引是否存在, 存在返回 true");
console.log(list.has(0));
// true

console.log("has 检测索引是否存在, 不存在返回 false");
console.log(list.has(100));

console.log("List 构建器可以把 JS 数组转成 Immutable 链表")
list = List([1, 2, 3]);
console.log(list);