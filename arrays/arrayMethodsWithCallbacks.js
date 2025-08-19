let num = [1, 4, 9, 16];
// function squareRoot(x){
//     return Math.sqrt(x);
// }

// let result = num.map(squareRoot);

// let result = num.map(function squareRoot(x){
//     return Math.sqrt(x);
// });

let result = num.map(x => Math.sqrt(x));

console.log(result);
console.log(num);