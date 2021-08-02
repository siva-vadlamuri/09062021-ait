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
// fetch("http://jsonplaceholder.typicode.com/users")
//   .then((data) => {
//     data.json().then((response) => console.log(response));
//   })
//   .catch((err) => {
//     console.log("Error Occured", err);
//   });
//   async await (es7)
// named function

// Async And Await
// async and await

const getServerData = async () => {
  // exception handling
  // Exeception --> Run time errors

  try {
    const result = await fetch("http://jsonplaceholder.typicode.com/users");
    //   it will wait untill the request is either resolved or rejected
    const response = await result.json();
    console.log(response);
  } catch {
    console.log("Error Occured");
  }
};
// Asynchronous Code is also called non-blocking code
getServerData();
