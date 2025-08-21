let prm = new Promise(() => {
    console.log("Executor function");
});

console.log(prm);

let prm1 = new Promise((resolve) => {
    console.log("Executor function");
    resolve();
});

console.log(prm1);

let prm2 = new Promise((resolve) => {
    console.log("Executor function");
    resolve("success");    
});

console.log(prm2);

let prm3 = new Promise((reject) => {
    console.log("Executor function");
    reject("Failure");
});

console.log(prm3);