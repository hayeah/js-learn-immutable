const { List, fromJS } = require("immutable");

// 浅 list
let l = List([
	{v: 1},
	{v: 2},
	{v: 3},
]);

console.log(l.toString());
// List [ [object Object], [object Object], [object Object] ]

// 毁灭性质修改, 再也拿不到之前结构
l.get(0).v = 100000;

let ldeep = fromJS([
	{v: 1},
	{v: 2},
	{v: 3},
]);

console.log(ldeep.toString());
// List [ Map { "v": 1 }, Map { "v": 2 }, Map { "v": 3 } ]

// 用路径深入到数据结构里面

// 非毁灭性修改，能拿到之前的结构
let ldeep2 = ldeep.setIn([0, "v"], 100000);

// ldeep.getIn([0, "v"])
// ldeep2.getIn([0, "v"])

// ldeep.hasIn([0, "v"])
// ldeep2.hasIn([0, "v"])

// 迭代器的每一个对象都是 Immutable.Map
console.log(ldeep.map(m => m.get("v")).toString())
