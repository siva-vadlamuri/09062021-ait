// var sellingPrice = 3490;
// var listingPrice = 1299;

// var discountPrice = ((sellingPrice - listingPrice) / sellingPrice) * 100;

// console.log(Math.floor(discountPrice));

// Step by Step Procedure
// Step-1 we take two variables a,b
// Step-2 assing some value a,b
// step-3 we need to check  a > (greater than) b
// Step-4 if a is greater than b print a

var a;
var b;
var result = a > b;
// console.log(result);
// if (a > b) {
//   console.log("i am printing " + a);
// } else if (b > a) {
//   console.log(b);
// }
// else {
//   console.log('No data')
// }

// Step-1 we will take the age of a person
// check the age person
// if less than 3 years infant
// if 3 years to 12 years child
//  if 12 to 19 teen age
//  if 19 to 60 adult
// old

var age = 4;

if (age <= 3) {
  console.log("Infant");
} else if (age > 3 || age <= 12) {
  console.log("child");
} else if (age > 12 || age <= 19) {
  console.log("Teen ");
} else if (age > 19 || age <= 60) {
  console.log("Adult");
} else {
  console.log("Old Age");
}

// Wether API

// ternary operator

//  condition? statement1 (true) : statement2 (false)

5 > 5
  ? console.log("10 is greater than 5")
  : console.log("10 is not greater than 5");

//   Switch statemenets

// Creating Login Part for an application
// Admin --> Complete Rights the
// Sub Admin --> He can add a person
// test --> The will conduct an exam
// user --> and they can attempt the test or watch the tuturials in website
//  guest --> visit the website

var whichPerson = "Sub-admin";
switch (whichPerson) {
  case "Admin":
    console.log("You have complete authority in a website");
    break;

  case "Sub-admin":
    console.log("You can add a user");
    break;

  case "test":
    console.log("You can conduct a test");
    break;

  case "user":
    console.log("He can attempt the test or watch the tutorials");
    break;

  default:
    console.log("You are a guest to the website");
    break;
}

//
// Condtional Statements
// Program : Program is set instructions to a computer
//  Arrays
var firstName = "shiva";
// Arrays, Objects
var firstPerson = "Govind";

// When you want to store mutliple items then we use arrays
// Students
// Collection of items

var students = ["govind", "masthan", "Rakesh", "Ramesh", "lokesh", "Chaitnya"];
// [0, 1, 2, 3, 4];
// Retriving Data
// console.log(students[1])
// students[0] = "shiva";

console.log(students);
console.log(students[students.length - 1]);

// loops
// for(intiliazation;condtion;increment/decrement)
// ++ (increasing your value by 1) (increment)
// -- (if you want to drecrase your value by 1) (decrement)
// var indexNumber = 0;
// indexNumber++;
// console.log(indexNumber);

// var decrementValue = 10;
// decrementValue--;
// console.log(decrementValue);

for (var i = 2; i < students.length; i++) {
  console.log(students[i]);
}

// for, while, do-while
// es-6 for of, and for in

// intilization, condtion,
// while()

// for, while
// if you know the intilization part, for loop
// if you dont what initlization part

var randomNumber = 20;
randomNumber += 30;

while (randomNumber < 100) {
  console.log(randomNumber);

  randomNumber++;
}

// do while
// if you want to execute your code atleast once, if the condtion is still wrong,
let lastNumber = 23;
do {
  console.log(lastNumber);
  lastNumber++;
} while (false);

// do while is also called as exit controled loop
// for and while are entry control loop
