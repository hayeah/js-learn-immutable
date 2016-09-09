/*
实现 concat 函数，把多个数组拼接为 List
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

