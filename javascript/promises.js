const p = new Promise((resolve, reject) => {
  let a = 1 + 3;
  if (a == 2) {
    resolve("You get the data successfully");
  } else {
    reject("Some Error Occured");
  }
});
console.dir(p);
p.then((message) => console.log("resolve state" + message)).catch((err) =>
  console.log("Catch Method" + err)
);
fetch("http://jsonplaceholder.typicode.com/users")
  .then((data) => {
    data.json().then((response) => console.log(response));
  })
  .catch((err) => {
    console.log("Error Occured", err);
  });
