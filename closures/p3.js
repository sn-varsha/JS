function createCount(){
    let count = 0;
    return function(){
        count += 1;
        console.log(count);
    }
}

let countA = createCount();
countA();
countA();
let countB = createCount();
countB();
countB();