var a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20
//
// // ... 나머지 연산자 (스프레드연산자 x)
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20


// Stage 4(finished) proposal
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

// Default values es6
var a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7