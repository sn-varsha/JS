function step1(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step1 started");
            setTimeout(() => {
                console.log("Step1 successfull");
                resolve();
            },4000);
        }
    );
}

function step2(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step2 started");
            setTimeout(() => {
                console.log("Step2 successfull");
                resolve();
            },3000);
        }
    );
}

function step3(){
    return new Promise(
        (resolve,reject) => {
            console.log("Step3 started");
            setTimeout(() => {
                console.log("Step3 failed");
                reject();
            },2000);
        }
    );
}

function step4(){
    return new Promise(
        (resolve,reject) => {
            console.log("Ste41 started");
            setTimeout(() => {
                console.log("Step4 successfull");
                resolve();
            },1000);
        }
    );
}

async function run(){
    try{
        await step1();
        await step2();
        await step3();
        await step4();
        console.log("Promise fulfilled");
    }
    catch(error){
        console.error("An error occurred:", error);
    }
}

run();