function fun1(){
    console.log("fun1 started");
    console.log("fun1 ended");
}

function fun2(){
    console.log("fun2 started");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    while(Date.now() <= end){

    }
    console.log("fun2 ended");
}

function fun3(){
    console.log("fun3 started");
    console.log("fun3 ended");
}

fun1();
setTimeout(fun2,2000);  //wait for 2 sec and then execute fun2, executes only once and only when stack segment is empty
fun3();