// Call back Function
// call back is a function that is passed as an argument to another function

function x(callback) {
  // console.log(callback);
  callback();
}

function y() {
  console.log("It is a callback function");
}
x(y);

// we will take a userinput

function greeting(name) {
  alert("hello" + name);
}

function processUserInput(callbackFunc) {
  console.log(callbackFunc);
  // var user = prompt("Enter your name");
  if (user) {
    callbackFunc(user);
  }
}
// map
// reduce
// filter

// processUserInput(greeting);
// greeting is a callback function
// processUserInput is taking another function as an argument, higher order function

// High order function
// A function that takes another function as an argument

// nested function

// function inside of another function is called nested function

function outer() {
  function inner() {
    console.log("inner func");
  }
  inner();
}
outer();

// curryfunction, recurisve function

// Introduction to events

// Event : Triggering an Action
// page events
// forms events
// mouse events
// keyboard events

var button = document.getElementById("button");
console.log(button);

button.onclick = function (event) {
  alert("Button was clicked");
  console.log(event.target);
};
