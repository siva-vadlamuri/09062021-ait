// DOM Document Object Model ()
// It is used to allow programs to dynamically access and update
// content, structure and styles of HTML

// accessing the HTML Data
// update the data
// Dynamic HTML
// Styling

// How to select element an
// getElementById('my-text')
// 5 selectors

// getElementById()
// get an element based a particular id
// getElementByClassName();

// get an element based on class name

// getElementByTagName();
// getElementByName();
// querySelector();
// querySelectorAll()

// var myText = document.getElementById("my-text");

// myText.innerText = "Heading One";
// // myText.innerHTML  =
// myText.style.color = "orange";

// var myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = "<h1>  </h1>";
// var primaryText = document.getElementsByClassName("text-primary");
// console.log(primaryText);

// Step-1
// You need to select an element
// Step-2
// Dynamic HTML

// Step-3
// Append back dynamic HTML prepared by JavaScript to HTML

var userData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
  {
    id: 11,
    name: "Shiva",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },

  {
    id: 11,
    name: "Shiva",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
  {
    id: 11,
    name: "Shiva",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

// var tableBody = document.getElementById("table-body");

// // console.log(someString);

// var dynamicHTML = "";

// for (var i = 0; i < userData.length; i++) {
//   dynamicHTML += "<tr>";
//   dynamicHTML += "<td>" + userData[i].id + "</td>";
//   dynamicHTML += "<td>" + userData[i].name + "</td>";
//   dynamicHTML += "<td>" + userData[i].username + "</td>";
//   dynamicHTML += "<td>" + userData[i].email + "</td>";
//   dynamicHTML += "<td>" + userData[i].address.street + "</td>";
//   dynamicHTML += "<tr>";
// }

// // console.log(dynamicHTML);
// tableBody.innerHTML = dynamicHTML;

// var cardData = document.getElementById("card-data");

// var cardHTML = "";

// for (var index = 0; index < userData.length; index++) {
//   cardHTML += "<div>";
//   cardHTML += "<p>" + userData[index].name + "</p>";
//   cardHTML += "<p>" + userData[index].email + "</p>";
//   cardHTML += "</div>";
// }

// cardData.innerHTML = cardHTML;

// Selector
// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// getElementsByName()

// querySelector()
// querySelectorAll()

// var articleHead = document.getElementsByClassName("article-head")[0];
// // console.log(articleHead);
// // articleHead.style.backgroundColor = "#22bbcc";

// var headings = document.getElementsByTagName("h1");
// // id and tag name
// // console.log(headings);

// var names = document.getElementsByName("firstName");
// console.log(names);

// // querySelector

// var paragraph = document.querySelector("#myHeading");
// paragraph.style.backgroundColor = "#ff0000";

// // querySelector and querySelectorAll

// var demo = document.getElementsByClassName("demo")[0];
// console.log(demo);

// createElement()

// step-1 selecting the element

var body = document.body;
var heading = document.createElement("h1");
heading.innerText = "It is heading tag";
// body.append("It is a heading ");
body.appendChild(heading);

var sectionData = document.getElementById("mySection");
var paragraph = document.createElement("p");
var paragraph2 = document.createElement("p");
paragraph.setAttribute("id", "myParagraph");
console.log(paragraph.getAttribute("id"));
console.log(paragraph);
paragraph.innerText = "lorem40";
// paragraph.className = "bg-yellow";
// sectionData.appendChild(paragraph);
sectionData.append(paragraph);
sectionData.append(paragraph2);
// paragraph.remove();

// sectionData.removeChild(paragraph);
sectionData.removeChild(paragraph2);

// paragraph.remove();

// remove()
// removeChid()
// setAtrributes()

// className

// paragraph.className = "bg-yellow";
// paragraph.classList.add("bg-yellow");
// paragraph.classList.remove("bg-yellow");
// paragraph.classList.add("bg-yellow");
paragraph.classList.add("bg-yellow");
// if the class is present the toggle will the remove the class
// if the class is not present the toggle will add the class

// paragraph.classList.toggle("bg-yellow");

var listItem = document.querySelector(".list-item");
debugger;
var textCenter = document.getElementsByClassName("text-center")[3];
// for()
console.log(textCenter);
listItem.closest("#mySection");
// console.log(
