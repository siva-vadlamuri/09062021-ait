// Array Methods

// 1 includes
// 2 indexOf
// 3 join
// 4 push
// 5 pop
// 6 reverse
// unshift
// shift
// toString

// map
// reduce
// filter
// fill
// some
// every

var students = ["govind", "masthan", "Rakesh", "Ramesh", "lokesh", "Chaitnya"];
var fruits = ["Mango", "Apple", "Bannana", "Pineapple"];
// console.log(fruits.length)
// [0,1,2,3,]
// -1
// includes
var isPinneapplePresent = fruits.includes("Pineapple");
// booleans true / false
// console.log(isPinneapplePresent);

// indexOf --> it will return index number
// console.log(fruits.indexOf("Pineapple"));
// return type of indexOf is a numbers

// join is method it will contactenate (adding) all the elements of an array
// console.log(fruits.join("-"));
// return type of join method is string

// push, pop
// push to add one or more elements at the end of an array
students.push("shiva", "rama", "raju");
console.log(students);

// pop is remove a last element from the array
students.pop();
// console.log(students);

// removing and last items by push and pop

// adding and removing items from start

// to add an element to start we unshift

// unshift will add one more more items at the begining of an array

students.unshift("hareesh");
// console.log(students);

students.shift();
console.log(students);

// splice vs slice

students.splice(3, 1, "Manoj");
// splice(startIndexNumber, deleteCount,addidingItems)
// splice is used to add the elements and delete the elements
console.log(students);

// reverse --> it will reverse entire elements in an array
var reverseElements = students.reverse();
console.log(reverseElements);

// toString()
// it will convert your entire array into string

var numbers = [23, 45, 67, 89];
console.log(typeof numbers.toString());

// slice
// to extract the elements in an array

console.log(numbers.slice(1, 3));
// startIndex is inclusive (included)
// endIndex is exclusive (excluded)

// alert
// prompt to ask the user input
// cofirm yes or no
// var number = prompt("Enter some number");
// console.log(number);

// String and String Methods
// what is git,

// Sequence Of Characters

// property
// length
// methods
// charAt()
// includes()
// indexOf()
// concat()
// charCodeAt()
// concetanation is nothing but adding two string
// endsWith()
// startsWith()
// replace()
// replaceAll()
// search()
// split()
// slice()
// substring()
// toLowerCase()
// toUpperCase()
// trim()
// trimStart()
// trimEnd()

var myEmail = "ait.shiva@gmail.com";

for (var i = 0; i < myEmail.length; i++) {
  console.log(myEmail[i] + " " + i);
}

// Objects
// to store a collection of relavent data of particular one

// Object literal
// Object Constructor
//

// Object is a real world entity
// For Every Object properties and methods
var userData = {
  // key : valuePair
  firstName: "Govind",
  lastName: "M",
  email: "govind@gmail.com",
  phoneNumber: 99999999,
  addrees: "Bangalore",
};

// [{},{},{}]
// console.log(userData.email);

userData.email = "g@gmail.com";
// console.log(userData);
var studentsDetails = [
  {
    firstName: "Govind",
    lastName: "M",
    email: "govind@gmail.com",
    phoneNumber: 99999999,
    addrees: "Bangalore",
  },
  {
    firstName: "Masthan",
    lastName: "M",
    email: "Masthan@gmail.com",
    phoneNumber: 99999999,
    addrees: "Bangalore",
  },
  {
    firstName: "Lokesh",
    lastName: "M",
    email: "Lokesh@gmail.com",
    phoneNumber: 99999999,
    addrees: "Bangalore",
  },
  {
    firstName: "Ragavendra",
    lastName: "M",
    email: "Ragavendra@gmail.com",
    phoneNumber: 99999999,
    addrees: "Bangalore",
  },
  {
    firstName: "siva",
    lastName: "M",
    email: "siva@gmail.com",
    phoneNumber: 99999999,
    addrees: "Bangalore",
  },
];
console.log("<------>>>>>>");
console.log(studentsDetails[1].firstName);
studentsDetails[1].firstName = "Boorugala";
console.log(studentsDetails[1].firstName);
// console.log(studentsDetails[1].firstName);

// for(var i =0;i<studentsDetails.length;i++){
//   // debugger;
//    console.log(studentsDetails[i].firstName);
// }

// Objects --> a real world entites
// person,user, product, carDetail
// properties and Methods
// Human
// propeties
// height, weight, color,
// methods : talking, walk, running

// userObject
// properties(number, boolean, string, array)
// firstName
// lastName
// email
// phoneNumber
// address
// login
// logout

var arr = ["Shiva", "Govind", "Lokesh"];

// objects

var Obj = {
  firstName: "Mr",
  lastName: "Shiva",
  phoneNumber: 9999999,
  isLogin: false,
};

var ecommerce = {
  firstName: "Mr",
  lastName: "Shiva",
  phoneNumber: 9999999,
  isLogin: false,
  products: [],
};

// console.log(ecommerce.firstName);
console.table(ecommerce);
ecommerce.isLogin = true;

console.table(ecommerce);
