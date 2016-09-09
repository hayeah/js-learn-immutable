/*
实现 mergeTwo 函数，合并两个 Object 的属性为一个 Map
*/

const { List } = require("immutable");

function concat(array) {
	let l = List();
	for (let numbers of array) {
		for (let n of numbers) {
			l = l.push(n)
		}
	}

	return l;
}

console.log("合并两个对象");
console.log(
	concat([[1, 2, 3], [4, 5, 6], [], [7, 8]])
);

/*
 输出：

 List [ 1, 2, 3, 4, 5, 6, 7, 8 ]
 */

