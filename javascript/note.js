console.log(3); // Number
console.log(3.3); //floting-point value
console.log("hello world 2 &^%") // string
console.log('hello world 1')// string
let age = 22; // age is variable, 22 is value, data-type is Number ie 22
console.log(age);
age = 22.5;
console.log(age);
let x = 22; //bad variable name
//bad variable name "let 2age = 23" variable can not start with Nnumber
// valid variable name 
let _age = 22
console.log(_age);
let $age = 20;
console.log($age);
let Age = 23;
console.log(Age);// Age and age re different variable
// use naming convention lile camelCase
let thisIsCamelCase;//this is undifined variable
const score = 100;
console.log(score);
//score = 150; now if you reassing the variable it will show syntex error
let firstName = "switch";
let lastName = "off";
let fullName = firstName + " " + lastName
console.log(fullName);
fullName = firstName + lastName;
console.log(fullName);
let stg = "i";
let stgi = "o";
let string = stg.concat(stgi);
console.log(string);
console.log(firstName);
console.log(firstName + " " + lastName + ".");
console.log("vi\nbe");
//console.log(firstName\nlastName + ".");
console.log(string);
string = stg.concat(" " + stgi);
console.log(string);
console.log(string.length);
console.log(stg.length);
console.log(stgi[0]);
console.log(stgi[1]);
console.log(string[2]);
console.log(string[string.length - 1]);
console.log("switch\"off\"");
stg = "escape\n\'\"\\\string";
console.log(stg);
const forName = "i am"
const userName = `swithoff ${forName}.`;
console.log(userName);
let forLet1 = `this is ${stgi}`;
console.log(forLet1);
const forLet = `this is ${stg}`;
console.log(forLet);
let fullLet = "making \n something long by adding " + forName + " " + userName + "." + " " + forLet + ", " + forLet1 + ".";
console.log(fullLet);
let fullLet2 = `making \n something
long by adding ${forName} ${userName}`;
console.log(fullLet2);
console.log("hello world".indexOf("world"));
console.log("freeCodeCamp".indexOf("F"))
console.log(`hello world ${fullLet}.`.indexOf("l", 6));
console.log(fullLet2);
console.log(fullLet2.length);
console.log(fullLet2[fullLet2.length - 1]);
let ascii = "Amarican Standard Code for Information Interchange";
console.log(ascii.charCodeAt(0));
console.log(String.fromCharCode(107 ,105 ,65));
console.log(String.fromCharCode(66));
console.log("new method .includes()".includes("method"));
let sliceMethod = `it is used to make new string from already existing string`;
console.log(sliceMethod.length);
console.log(sliceMethod.indexOf("make"));
console.log(sliceMethod.slice(14 ,-3));
let toUpperCaseToLowerCaseMethod = "Here is an example of \"toUpperCase() & toLowerCase()\" method.";
let exampleToUpperCase = toUpperCaseToLowerCaseMethod.toUpperCase();
console.log(exampleToUpperCase);
let exampleToLowerCase = toUpperCaseToLowerCaseMethod.toLowerCase();
console.log(exampleToLowerCase);
let trimMethod = "  Here's an example of trim,trimStart and trimEnd method.  "
let trimExample = trimMethod.trim();
console.log(trimExample.trim());
console.log(trimMethod.trimStart());
console.log(trimMethod.trimEnd());