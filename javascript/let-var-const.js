// Agenda
// Var (es5) 2009
// let and  const  es6 (2015)

var firstName = "Mr";
console.log(output);
if (true) {
  var output = 0;
  var output = 20;
  //   redeclare
}

// console.log(output);

// Scope : upto where the data can flow

// Scope : accessibility
function someFunc() {
  if (true) {
    let lastName = "John";
  }
  //   console.log(lastName);
}
someFunc();
// console.log(lastName);

// If the variable declare  with var declaration out of the function then it is global scope
// When you declare a variable with var keyword inside a function then you can access that data
// within the function

// Es6 let and const
// let are const are block scoped variable
// using let and const we cannot redeclare the variable
// console.log(email);
let email = "test@example.com";

if (email) {
  let registerOTP = 234569;
  registerOTP = 34567;
  //   let registerOTP = 34567;

  console.log(registerOTP);
}

// console.log(registerOTP);

// constant
let phoneNumber;
phoneNumber = 764455555;
const API = "https://api.com";
// API = "json.placeholder";
// you cannot update the value for primitive
// numbers, string, boolean,
// API ;
console.log(API);
// you cant update the value
// we you declare the variable with the const keyword then only we need  assign the value

// difference let var and const

// <-------Var--------->
// var is global scope or function scope
// you can redeclare the variable

// let and const

// They are introduced on es6 , block scope variables
// You cannot redeclare the variables
// comming to let you can update the value

// CONST
// Blockscope varibale
// You cannot update the value
// When you declaring the variable at the point itself you need to assign the value

// Temporal dead zone

// Scope Chain
let someValue = "Globe Some Value";
if (true) {
  debugger;
  let someValue = "Some Name";
  console.log(someValue);

  if (true) {
    let someValue = "Some Other Value";
    console.log(someValue);
  }
}

let obj = {
  firstName: "John",
  lastName: "Mr",
  email: "john@example.com",
  //   address: {
  //     longitude: "278.976.788",
  //     latitude: "767.090.865",
  //     street: "6th main BTM stage 2",
  //   },
};

console.log(obj?.address?.street);

// AGEND :
// Hoisting
// setTimeOut
// setInterval
// Math
// Date
