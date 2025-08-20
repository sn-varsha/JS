function task1(){
    console.log("Task1 started...");
    let start = Date.now();
    let delay = 5000;
    let end = start + delay;
    console.log("Task1 executing...");
    while(Date.now() <= end){

    }
    console.log("Task1 completed...");
}
function task2(){
    console.log("Task2 started...");
    let start = Date.now();
    let delay = 3000;
    let end = start + delay;
    console.log("Task2 executing...");
    while(Date.now() <= end){

    }
    console.log("Task2 completed...");
}
task1();
task2();