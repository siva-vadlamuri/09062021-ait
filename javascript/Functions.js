//What is Function
// why we use functions
// what are the different types of functions

// Function a pice of code or block of code which will perform a specfic task, we can also reuse the code

// Array
// pop
// push
// shift
// unshift

// login, register, logout, addToCart

//

// To write your own login for a specfic task

// We need to write the custom code

// How to write a function

// you cannot use reserver keyword

if (true) {
  console.log("it is true");
}

// function declartion
function welcomeMessage() {
  document.write("<h1>Welcome To AIT </h1>");
  // console.log("welcome user");
}

welcomeMessage();

var userId = 123;
var password = "ait@123";

function loginUser() {
  if (userId == "123" && typeof userId == "number" && password == "ait@123") {
    // alert("Welcome to AIT");
  } else {
    alert("Invalid creditials");
  }
}

loginUser();

// calling // invoking // running

// function with paramerts

// Parameters when you declared a function
// Function Declaration // Function Statement
function calcSum(a, b) {
  var total = a + b;
  console.log(total);
}
calcSum(10, 20);

// Arguments when you invoking the function if passing any data to function these are called
// arguments
// what is difference between function declaration and function expression
// function without paramerts
// function with paramerts
// function with return statement
// function with default paramerts
// anaomous function
// self invoking function
// call back function
// higher order function
//recursive functions
// Arrow function
// NaN

// function with return statement
function mulitplyTheNumbers(param1, param2) {
  var result = param1 * param2;
  return result;
}
var output = mulitplyTheNumbers(10, 20);
console.log(output);

// Function with default Parameters
function calculateGst(ammount, gst) {
  var totalAmmount = ammount + (ammount * gst) / 100;
  console.log(totalAmmount);
}
// calculateGst(100000);
// calculateGst(10000, 20);

// Anonomous Function
// Function without a name  anonomous function

// function (){
// }

// self invoking function

// (function () {
//   console.log("Self invoking function");
// })();

// Function Expression
// When your assiging funtion as a value to the variable is called function expression
var firstName = function (a, b) {
  console.log(a, b);
  console.log("I am a function expression");
};
// console.log(firstName);

// firstName(10, 20);

// Arrow Function
// es6, shorthand (consice) way of writing function expression

// var myFunc = () => {
//   console.log("I am a arrow function");
// };
// myFunc();

// mulitplyBy2

var mulitplyBy2 = (num1) => console.log(num1 * 2);
mulitplyBy2(23);

function sumOfTheNumbers(param1, param2) {
  console.log(param1, param2);
  // when you doing mathemtical operator with undefined  return NaN
  // isNaN()
  console.log(param1 + param2);
}
sumOfTheNumbers();
