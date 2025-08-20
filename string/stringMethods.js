let userInput = "   Alice   |  ALICE@exmp.com   |  JavaScript developer. I love JavaScript!  ";
let parts = userInput.split('|');
console.log(parts);

let name = parts[0].trim();
let email = parts[1].trim();
let bio = parts[2].trim();
console.log(name);
console.log(email);
console.log(bio);

name = name.toUpperCase();
console.log(name);

email = email.toLowerCase();
console.log(email);

let likesJS = bio.includes("JavaScript");
console.log(likesJS);

console.log(bio.indexOf("JavaScript"));
console.log(bio.lastIndexOf("JavaScript"));

// bio = bio.replace("JavaScript", "JS");   // replace only first occurence
bio = bio.replaceAll("JavaScript", "JS");  // replace all occurences
console.log(bio);

let proffession = bio.slice(0, bio.indexOf("I")).trim();
console.log(proffession);
console.log(proffession.length);
console.log(bio.length);

let validEmail = email.includes("@") && email.endsWith(".com");
console.log(validEmail);

let seperator = "-".repeat(30);
let finalProfile = `
user Profile :
${seperator}

Name : ${name.trim()}
Email : ${email.trim()}
proffession : ${proffession}
likesJS : ${likesJS}

${seperator}
`;
console.log(finalProfile);