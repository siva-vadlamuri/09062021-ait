// debugger;
x();
console.log(someNumber);
// Hoisting : you can access or call the function declaration or a variable before it declaration

function x() {
  var y = 10;
  console.log("i am x");
  function z() {}
}

const someFunc = function () {
  console.log("Function Expression");
};
someFunc();

// Function Declaration and Function Expression --> Hoisting
var someNumber = 23;

// Context : everything will execute inside the context
// Global Context
// Storing --> All the variables and function
// It will store the varibales and functions inside other function
// Execution context
// It will store all the variables and function declarations

// setInterval
// setTimeOut
const form = document.querySelector("form");
// setTimeout(function () {
//   form.style.display = "block";
// }, 5000);
// setTimeout function, time in ms
// 1s --> 1000ms
// setTimeOut(function () {
//   alert("setTimeout");
// }, 2000);
// for every 2 seconds if you want to execute any thing
//  2  2  2 2
// setInterval(() => {
//   console.log("For Interval of Time");
// }, 2000);
const fbCount = document.querySelector(".fb-count");

let count = 0;
setInterval(function () {
  if (count <= 1900) {
    fbCount.innerText = "count " + count;
    count++;
  } else {
    clearInterval();
  }
}, 1);
