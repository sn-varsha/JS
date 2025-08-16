let temp1=30;
if(temp1>25){
    var coolingTemp1=temp1-25;
    console.log("Server room needs to be cooled by ",coolingTemp1);
}
else{
    var heatingTemp1=25-temp1;
    console.log("Server room needs to be heated by ",heatingTemp1);
}
console.log(temp1);
console.log(coolingTemp1);
console.log(heatingTemp1);

//let & var have d/f block scope

let temp=30;
if(temp>25){
    let coolingTemp=temp-25;
    console.log("Server room needs to be cooled by ",coolingTemp);
}
else{
    let heatingTemp=25-temp;
    console.log("Server room needs to be heated by ",heatingTemp);
}
console.log(temp);
console.log(coolingTemp);  //can't be accesed outside the block
console.log(heatingTemp);  //can't be accesed outside the block

