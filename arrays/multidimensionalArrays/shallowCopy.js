let ar1 = [[10, 20],[30, 40]];
console.log(ar1);

let ar2 = [...ar1]; //shallow copy
console.log(ar2);

let ar3 = ar1.slice(); //shallow copy
console.log(ar3);

ar1[1].push(99);
console.log(ar1);
console.log(ar2);
console.log(ar3);


let a1 = [{name:"Ann"},{name:"Ben"}]
console.log(a1);

let a2 = a1.slice();
console.log(a2);

a1[0].name="Rohit";
console.log(a1);
console.log(a2);