const { List, Map, fromJS } = require("immutable");

let l = List([10, 20, 30, 40, 60, 70, 80, 90, 100]);
console.log("toArray 把 List 转化成 JS 数组");
console.log(l.toArray());
// [ 10, 20, 30, 40, 60, 70, 80, 90, 100 ]

console.log("toObject 把 List 转化成 JS 对象，key 改成字符串");
console.log(l.toObject());
/*
{ '0': 10,
  '1': 20,
  '2': 30,
  '3': 40,
  '4': 60,
  '5': 70,
  '6': 80,
  '7': 90,
  '8': 100 }
*/

console.log("把 List 转化成 JS 对象，key 改成二进制的字符串");
console.log(l.toMap().mapKeys(k => k.toString(2)).toObject());
/*
{ '0': 10,
  '1': 20,
  '10': 30,
  '11': 40,
  '100': 60,
  '101': 70,
  '110': 80,
  '111': 90,
  '1000': 100 }
*/

let m = Map({
	a: 10,
	b: 20,
	c: 30,
});

console.log("toArray 把 Map 的所有值搜集到 JS 数组");
console.log(m.toArray());
// [ 10, 20, 30 ]

console.log("toObject 把 Map 的所有键值收集到 JS 对象");
console.log(m.toObject());
/*
{ a: 10, b: 20, c: 30 }
*/

console.log("把 Map 的键值收集到 JS 数组");
console.log(m.keySeq().toArray());
/*
[ 'a', 'b', 'c' ]
*/

console.log("把 Map 的改成二进制的键值收集到 JS 数组");
console.log(m.keySeq().map(k => k.charCodeAt(0).toString(2)).toArray());
/*
[ '1100001', '1100010', '1100011' ]
*/

let deepMap = fromJS({
	a: [1, 2, 3],
	b: [2, 3, 4],
	c: [5, 6, 7],
});

console.log("toObject 不会深入转化 immutable 结构为 JS 对象");
console.log(deepMap.toObject());
/*
{ a: List [ 1, 2, 3 ], b: List [ 2, 3, 4 ], c: List [ 5, 6, 7 ] }
*/

console.log("toJS 会深入转化 immutable 结构为 JS 对象");
console.log(deepMap.toJS());
/*
{ a: [ 1, 2, 3 ], b: [ 2, 3, 4 ], c: [ 5, 6, 7 ] }
*/
