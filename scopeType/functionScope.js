function add(){
    let a = 10;
    var b = 20;
    var sum = a + b;
    console.log(sum);
}
add();

function printTillNum1(num){
    for(var i=1;i<=num;i++){
        console.log(i);
    }
    console.log("final value of i is ",i);
}
printTillNum1(6);
//console.log("final value of i is ",i); ---error
console.log();

function printTillNum(num){
    for(let i=1;i<=num;i++){
        console.log(i);
    }
    console.log("final value of i is ",i);
}
printTillNum(6);
console.log("final value of i is ",i); //error