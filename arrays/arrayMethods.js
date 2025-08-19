let ar = [10, 20, 30, 40];
console.log(ar);

ar.push(50);      //add element at the end of the array
console.log(ar);

ar.unshift(60);   //add element at the beginning of the array
console.log(ar);

let x= ar.pop();   //remove element from the end of the array
console.log(x);
console.log(ar);

let y = ar.shift(); //remove element from the beginning of the array
console.log(y);
console.log(ar);

let rem = ar.splice(2, 1); //remove element from the specified index
console.log(rem);
console.log(ar);

let rem1 = ar.splice(1, 2, 60, 70); //remove element from the specified index and add element at the specified index
console.log(rem1);
console.log(ar);

ar.splice(1, 0, 50);  //add element at the specified index
console.log(ar);