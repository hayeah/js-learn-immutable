const { List } = require("immutable");

let l = List();

// [1, 2, 3]
let l1 = l.push(1)
let l2 = l1.push(2);
let l3 = l2.push(3);
let list = l3;

console.log("添加三个元素, 每次添加都会创建新的 List 结构");
console.log("l1 ->", l1);
// List [ 1 ]
console.log("l2 ->", l2);
// List [ 1, 2 ]
console.log("l3 ->", l3);
// List [ 1, 2 ]

console.log("添加新元素, 会创建新的 List 结构");
let l4 = list.push(4);
console.log(l4);
// List [ 1, 2, 3, 4 ]


// console.log("虽然添加了 d，旧的 map 还是和原来一样");
// console.log(map);
// //  Map { "a": 1, "b": 2, "c": 3 }

// console.log("设定 d 为 2000，会创建新的 Map 结构");
// let map2000 = map20.set("d", 2000);
// console.log(map2000);
// // { "a": 1, "b": 2, "c": 3, "d": 2000 }

// console.log("旧的 map20 和原来一样")
// console.log(map20);
// // { "a": 1, "b": 2, "c": 3, "d": 20 }

// console.log("旧的 map 也和原来一样")
// console.log(map);
// // Map { "a": 1, "b": 2, "c": 3 }



// // let l20 = list.push(20);
// // let l200 = list.push(200);
