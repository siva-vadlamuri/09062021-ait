// We need to select input fields of forms
// we need get the value of the input fields
// Step-3 Validating the form
// alert("Login");

// var signupButton = document.getElementById("signUp");
var btnSignup = document.getElementById("signup");
// debugger;
console.log(btnSignup);
// btnSignup.onclick = function () {
//   alert("Button was clicked");
// };

// signupButton.onclick = function (event) {
//   event.preventDefault();
//   var userid = document.getElementById("userid");
//   var email = document.getElementById("email");
//   var password = document.getElementById("password");
//   console.log(userid, email, password);
// };
// Add Event Listener will take two parameters
function validateTheForm(userid, email, password) {
  // console.log(userid.value, email.value, password.value);
  var userErr = document.getElementById("userErr");
  var emailErr = document.getElementById("emailErr");
  var passwordErr = document.getElementById("passwordErr");
  if (userid.value === "" || userid.value.length < 4) {
    // alert("Please enter a user id");
    userErr.innerText = "please enter a valid user id";
    userErr.style.color = "red";
  }
  // xyz@gmail.com
  if (
    email.value === "" ||
    !email.value.includes("@") ||
    !email.value.includes(".")
  ) {
    emailErr.innerText = "Please Enter a valid Email Id";
    emailErr.style.color = "red";
  }
  if (password.value === "" || password.value.length < 6) {
    passwordErr.innerText = "Password should be minimum 6 characters";
    passwordErr.style.color = "red";
  }
}

btnSignup.addEventListener("click", function (e) {
  //   debugger;
  //   alert("Click event");
  console.log(e);
  e.preventDefault();
  var userid = document.getElementById("userid");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  //   console.log(userid.value, email.value, password.value);
  validateTheForm(userid, email, password);
});

// myFunc({})
// callback function
// intro to higher order functions
// intro to the events
// How to do a form validation

// Events
// Triggering An Action
