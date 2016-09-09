const { Map, List } = require("immutable");

let m = Map({a: 1, b: 2, c: 3});
let l = List([1, 2, 3]);

let mPower2 = m.map(v => v * v);
let lPower2 = l.map(v => v * v);

let mPower2Even = m.map(v => v * v).filter(v => v % 2 === 0);
let lPower2Odd = l.map(v => v * v).filter(v => v % 2 !== 0);


