let prm = new Promise((resolve, reject) => {
    console.log("Execution function");
    resolve({id : "101" , name : "Sanu"});
    //reject("Failure");
});

prm
.then((result) => {
    console.log(result);
})
.catch((result) => {
    console.log(result);
});