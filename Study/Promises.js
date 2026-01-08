console.log("#".repeat(30));
console.log(
  "%cAJAX And JSON|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// ===========================================================

/*

- Callback Function
- Callback Hell Or Pyramids Of Doom

*/

// Callback
// function changeColor(e) {
//   e.target.style.color = "red";
// }

// let test = document.querySelector(".test");

// test.addEventListener("click", changeColor);

// Callback
// function Sentence() {
//   console.log("I Am Here");
// }

// setTimeout(Sentence, 2000);

// Example For Callback Hell Or Pyramids Of Doom

// setTimeout(function firstOutput() {
//   console.log("First Output");
//   setTimeout(function secondOutput() {
//     console.log("Second Output");
//     setTimeout(function thirdOutput() {
//       console.log("Third Output");
//       setTimeout(function fourthOutput() {
//         console.log("Fourth Output");
//       }, 2000);
//     }, 3000);
//   }, 4000);
// }, 1000);

// ===========================================================

/*

Promise
-- Promise Status:
- Pending: Intial Status
- Fulfilled: Completed Succcesfully
- Rejected: Failed

*/

// let myPromise = new Promise((fulfilledFun, rejectedFun) => {
//   let connect = true;
//   if (connect) {
//     fulfilledFun(`Connection Established`);
//   } else {
//     rejectedFun(Error(`Connection Failed`));
//   }
// }).then(
//   (resolveValue) => console.log(`Succcesfull ${resolveValue}`),
//   (rejectValue) => console.log(`Rejected ${rejectValue}`)
// );

// console.log(myPromise); // Promise {<pending>}

// let myPromise = new Promise((fulfilledFun, rejectedFun) => {
//   let connect = true;
//   if (connect) {
//     fulfilledFun(`Connection Established`);
//   } else {
//     rejectedFun(Error(`Connection Failed`));
//   }
// });

// console.log(myPromise); // Promise {<fulfilled>: 'Connection Established'}

// myPromise.then(
//   () => console.log(`Succcesfull `),
//   () => console.log(`Rejected`)
// );

// ===========================================================

/*

Promise
-then ==> Promise Is Successfull Use The Resolved Data
- Catch ==> Promise Is Failed, Catch The Error
- Finally ==> Promise Is Failed Or Successfull, Do Something
*/

// let myPromise = new Promise((accepted, refused) => {
//   let employee = ["Shady", "Ahmed", "Ali", "Samy"];
//   employee.length === 4
//     ? accepted(employee)
//     : refused(Error("The Meeting Will Be Canceled"));
// })
//   .then((ChoosenEmployee) => {
//     ChoosenEmployee.length = 3;
//     console.log(ChoosenEmployee);
//     return ChoosenEmployee;
//   })
//   .then((ChoosenEmployee) => {
//     ChoosenEmployee.length = 2;
//     console.log(ChoosenEmployee);
//     return ChoosenEmployee;
//   })
//   .then((ChoosenEmployee) => {
//     ChoosenEmployee.length = 1;
//     console.log(`The Chosen Employee Is ${ChoosenEmployee}`);
//   })
//   .catch((refusedRes) => console.log(refusedRes))
//   .finally(console.log("End"));

// ===========================================================

/*

Promise And XHR

*/

// let myData = (myLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();

//     myRequest.onload = () => {
//       if (myRequest.status === 200 && myRequest.readyState === 4) {
//         resolve(JSON.parse(myRequest.responseText));
//       } else {
//         reject(Error("Data Not Found"));
//       }
//     };

//     myRequest.open("GET", myLink);
//     myRequest.send();
//   });
// };

// myData("https://api.github.com/users/elzerowebschool/repos")
//   .then((resolve) => {
//     console.log(resolve);
//     return resolve;
//   })
//   .then((resolve) => {
//     resolve.length = 5;
//     console.log(resolve);
//     return resolve;
//   })
//   .then((resolve) => {
//     console.log(resolve[0].name);
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// ===========================================================

/*

Fetch API
- Return A Representation Of The Entire HTTP Rsponse

*/

// fetch("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     console.log(result); // return Response
//     let myData = result.json(); //  Promise
//     console.log(myData);
//     return myData; // Data Of API
//   })
//   .then((res) => {
//     console.log(res); // Array Length 23
//     res.length = 5;
//     console.log(res); // Array Length 5
//     return res;
//   })
//   .then((final) => {
//     console.log(final[0].name);
//   });

// ===========================================================

/*

Promise
- All
- All Settled
- race

*/

// let myFirstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First");
//   }, 2000);
// });

// let mySecondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Second");
//   }, 3000);
// });

// let myThirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Third");
//   }, 4000);
// });

// Promise.all :
// if All Resolved, it will back all and iif one or more rejected it will back the fastest rejected

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((ref) => console.log(ref));

// -----

// Promise.allSettled :
// It Will Return All with details

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (res) => {
//     console.log(res);
//     res.forEach((e) => {
//       if (e.status === "rejected") {
//         console.log(`${e.reason} is rejected`);
//       } else {
//         console.log(`${e.value} is resolved`);
//       }
//     });
//   }
// );

// -----

// Promise.allSettled :
// It Will Return Fastest Whatever Rejected Or Resolved

// Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then((res) => {
//   console.log(res);
// });

// ===========================================================

/*

Async:
- Async Before Function Mean This Function Return A Promise
- Async And Awiat Help In Creating Asynchronous Promise With Cleaner style
*/

// function myData() {
//   return new Promise((res, ref) => {
//     let users = [];
//     if (users.length) {
//       res("Data Is Found");
//     } else {
//       ref("Data Is Not Found");
//     }
//   });
// }

// myData()
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// ----

// function myData() {
//   let users = [2];
//   if (users.length) {
//     return Promise.resolve("Data Is Found");
//   } else {
//     return Promise.reject("Data Is Not Found");
//   }
// }

// myData()
//   .then((res) => console.log(`${res} => Resolved`))
//   .catch((rej) => console.log(`${rej} => Rejected`));

// ----

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length) {
//       return res("resolved");
//     } else {
//       return rej(Error("Rejected"));
//     }
//   });
// }

// getData()
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// -------

// function getData() {
//   let users = [2];
//   if (users.length) {
//     return Promise.resolve("resolved");
//   } else {
//     return Promise.reject(Error("Rejected"));
//   }
// }

// getData()
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// -------

// async function getData() {
//   let users = [];
//   if (users.length) {
//     return "resolved";
//   } else {
//     throw Error("Rejected");
//   }
// }

// getData()
//   .then((res) => console.log(res))
//   .catch((rej) => console.log(rej));

// ===========================================================

/*

Awiat
- Works Only Inside Async Functions
- Makes JS Wait For The Promise Result 

*/

// Without Await
// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Good Result");
// rej(Error("Bad Result"));
//   }, 2000);
// });

// function readData() {
//   console.log("Before");
//   myPromise.then((re) => console.log(re)).catch((ee) => console.log(ee));
//   console.log("After");
// }

// readData();

// ---------

// With Await

// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Good Result");
//     // rej(Error("Bad Result"));
//   }, 2000);
// });

// async function readData() {
//   console.log("Before");
//   console.log(await myPromise.catch((ee) => ee).finally(console.log("End")));
//   // myPromise.then((re) => console.log(re)).catch((ee) => console.log(ee));
//   console.log("After");
// }

// readData();

// ===========================================================

/*

Try, Catch And Finaly With Fetch

*/

// let myPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     // res("Good Result");
//     rej("Bad Result");
//   }, 2000);
// });

// async function getData() {
//   console.log("Before");
//   try {
//     console.log(await myPromise);
//   } catch (rej) {
//     console.log(rej);
//   } finally {
//     console.log("After");
//   }
// }

// getData();

// -------------
// "https://api.github.com/users/elzerowebschool/repos"

async function getData() {
  console.log("Before");
  let myData = await fetch(
    "https://api.github.com/users/elzerowebschool/repos"
  );
  try {
    let finalData = await myData.json();

    // console.log((await myData.json())[0].name);
    console.log(finalData[0].name);
    console.log(finalData);
  } finally {
    console.log("After");
  }
}

getData();
