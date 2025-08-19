let ages = [34, 18, 13, 24, 3];

function checkAge(x){
    if(x >= 18){
        return true;
    }
    else{
        return false;
    }
}

let result = ages.filter(checkAge); //filters the array based on the condition
console.log(result);
console.log(ages);