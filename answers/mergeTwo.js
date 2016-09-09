/*
实现 mergeTwo 函数，合并两个 Object 的属性为一个 Map
*/

const { Map } = require("immutable");

function mergeTwo(o1, o2) {
	let m = new Map();
	for (let [k, v] of new Map(o1)) {
		m = m.set(k, v);
	}

	for (let [k, v] of new Map(o2)) {
		m = m.set(k, v);
	}

	return m;
}

console.log("合并两个对象");
console.log(
	mergeTwo({
		a: 1,
		b: 2,
	}, {
			c: 30,
			d: 40,
		})
);

/*
 输出：

 Map { "a": 1, "b": 2, "c": 30, "d": 40 }
 */

