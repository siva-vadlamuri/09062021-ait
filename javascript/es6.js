// ECMA
// ES6

// let & const
// Arrow Functions

const myFunc = () => {
  console.log("I am a function");
};
myFunc();
// Promises
// Destructuring
// How to destructure nested objects
// Spreed And Rest
// Template literals
// Default Paramerts

let arr = [23, 45, 7, 89, 91];
let firstNumber = arr[0];
let finalNumber = arr[arr.length - 1];
// console.log(firstNumber, finalNumber);
const [a, , , , e] = arr;
// console.log(a, e);
let obj = {
  firstName: "Mr",
  lastName: "John",
  email: "john@example.com",
  phone: "123-456-7867",
  address: {
    street: "276 Stage 2",
    lat: "27.98.00",
    log: "67.90.77",
  },
};

// console.log(obj.address.street);
const { firstName, lastName, email, phone } = obj;
// console.log(firstName + " " + lastName + " " + email + "" + phone);

const {
  address: { street },
} = obj;
console.log(street);

// Template Literals

let first = "Mr";
let last = "John";
let phoneNumber = 9999999;
// console.log("First name " + firstName + "" + lastName + "" + phoneNumber + '');
// Template literals

console.log(`firstname ${first} lastName ${last} ${phoneNumber}`);
