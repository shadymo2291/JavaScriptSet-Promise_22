console.log("#".repeat(30));
console.log(
  "%cPromises|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_1-2

// The Solution By using Promise
//------------------------------

// let myPromise = new Promise((resolve, reject) => {
//   let myRequest = new XMLHttpRequest();

//   myRequest.open("GET", "./articles.json");

//   myRequest.onload = () => {
//     resolve(JSON.parse(myRequest.responseText));
//     reject(Error("Data IS Not Found"));
//   };

//   myRequest.send();
// })
//   .then((result) => {
//     result.length = 5;
//     return result;
//   })
//   .then((finalResult) => {
//     for (let ele in finalResult) {
//       let container = document.createElement("div");

//       let articleTitle = document.createElement("h3");
//       articleTitle.innerHTML = finalResult[ele].title;

//       let articleDescription = document.createElement("h3");
//       articleDescription.innerHTML = finalResult[ele].description;

//       container.appendChild(articleTitle);
//       container.appendChild(articleDescription);

//       document.body.appendChild(container);
//     }
//   })
//   .catch((rej) => console.log(rej));

// -------------------------------------
// The Solution By using fetch
//--------------------------------------

fetch("articles.json")
  .then((result) => {
    let myData = result.json();

    return myData;
  })
  .then((res) => {
    res.length = 5;
    return res;
  })
  .then((finalResult) => {
    for (let ele in finalResult) {
      let container = document.createElement("div");

      let articleTitle = document.createElement("h3");
      articleTitle.innerHTML = finalResult[ele].title;

      let articleDescription = document.createElement("h3");
      articleDescription.innerHTML = finalResult[ele].description;

      container.appendChild(articleTitle);
      container.appendChild(articleDescription);

      document.body.appendChild(container);
    }
  })
  .catch(() => console.log(Error("Data Is Not Found")));
