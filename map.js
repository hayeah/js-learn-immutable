const { Map } = require("immutable");

// {}
let m = Map();

console.log("构建了空的 Map");
console.log(m);
// Map {}

// { a: 1, b: 2, c: 3 }
console.log("添加 a,b,c 三个键值");
let map = m.set("a", 1)
          .set("b", 2)
          .set("c", 3);
console.log(map);
// Map { "a": 1, "b": 2, "c": 3 }

console.log("get('a') 方法获取 a 的值");
console.log(map.get("a"));
// 1

console.log("get('c') 方法获取 c 的值");
console.log(map.get("c"));
// 3

console.log("get('d') 没有对应的键值，返回 undefined");
console.log(map.get("d"));
// undefined

console.log("get 可以设定默认返回值");
console.log(map.get("d", -1));
// -1

console.log("has 检测键值是否存在, 存在返回 true");
console.log(map.has("a"));
// true

console.log("has 检测键值是否存在, 不存在返回 false");
console.log(map.has("d"));
// false

console.log("Map 构建器可以把 JS 对象转成 Immutable 对象")
map = Map({a: 1, b: 2, c: 3});
console.log(map);