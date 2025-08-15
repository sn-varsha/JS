//Function Declaration
function add(a,b){
    return a+b;
}
console.log(add(10,200));

//Function Expression
let fun = function(a,b){
    return a+b;
}
console.log(fun(100,200));

//Arrow Function
let add1=(a,b) => a+b;
console.log(add1(100,200));

//Immediately invoked function expression(IIFE)
(function(){
    console.log("I run immediately");
})();