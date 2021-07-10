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

var students = ["govind", "masthan", "Rakesh", "Ramesh", "lokesh", "Chaitnya"];
var fruits = ["Mango", "Apple", "Bannana", "Pineapple"];
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
var number = prompt("Enter some number");
console.log(number);
