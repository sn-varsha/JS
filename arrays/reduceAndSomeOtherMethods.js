let num = [1, 4, 9, 16];
// let res = num.reduce((total, x) => total+x, 0);
let res = num.reduce((total, x) => total+x, 6);  //reduce method is used to sum all the elements of an array and 6 is the initial value of total 
console.log(res);
console.log(num);

let score = [85, 72, 90, 67];
let a = score.some(x => x >= 85);  //some method is used to check if any element of an array satisfies the condition
console.log(a);

let hasPassed = score.every(x => x>= 50);  //every method is used to check if all the elements of an array satisfies the condition
console.log(hasPassed);

let res1 = score.find(x => x>85);  //find method is used to find the first element of an array that satisfies the condition
console.log(res1);

let res2 = score.findIndex(x => x>85);  //findIndex method is used to find the index of the first element of an array that satisfies the condition
console.log(res2);

score.sort();  //sort method is used to sort the elements of an array in ascending order
console.log(score);