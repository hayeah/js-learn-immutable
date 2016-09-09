const { Map } = require("immutable");

let m = Map();
// { a: 1, b: 2, c: 3 }
let ma = m.set("a", 1);
let mb = ma.set("b", 2);
let mc = mb.set("c", 3);
let map = mc;

console.log("添加三个键值, 每次添加都会创建新的 Map 结构");
console.log("ma ->", ma);
// Map { "a": 1 }
console.log("mb ->", mb);
// { "a": 1, "b": 2 }
console.log("mc ->", mc);
// Map { "a": 1, "b": 2, "c": 3 }

console.log("添加 d, 会创建新的 Map 结构");
let map20 = map.set("d", 20);
console.log(map20);
// { "a": 1, "b": 2, "c": 3, "d": 20 }

console.log("虽然添加了 d，旧的 map 还是和原来一样");
console.log(map);
//  Map { "a": 1, "b": 2, "c": 3 }

console.log("设定 d 为 2000，会创建新的 Map 结构");
let map2000 = map20.set("d", 2000);
console.log(map2000);
// { "a": 1, "b": 2, "c": 3, "d": 2000 }

console.log("旧的 map20 和原来一样")
console.log(map20);
// { "a": 1, "b": 2, "c": 3, "d": 20 }

console.log("旧的 map 也和原来一样")
console.log(map);
// Map { "a": 1, "b": 2, "c": 3 }

