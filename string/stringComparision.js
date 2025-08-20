let s = "JavaScript";
let name = "Bob";
let greetings = `Hi, ${name}`;
console.log(greetings);

let s1 = "JavaScript";
let s2 = "Java";
console.log(s1 == s2);
let s3 = "JAVA";
console.log(s2 == s3);

let str1 = "JavaScript";
let str2 = "Javascript";
let str3 = new String("JavaScript");
console.log(str1 === str2);
console.log(str1 === str3);
console.log(typeof str1);
console.log(typeof str3);

console.log(str1[2]);
str1[2] = "V";
console.log(str1[2]);