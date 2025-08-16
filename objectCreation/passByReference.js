let c1={
    name:"BMW",
    cost:75.6,
    mileage:8.6
};
console.log(c1.name);
console.log(c1.cost);
console.log(c1.mileage);

let c2=c1;
console.log(c2.name);
console.log(c2.cost);
console.log(c2.mileage);

c2.name="KIA";
console.log(c1.name);
console.log(c2.name);