// A Promise is an object that will return a value in future.

// const promise = jeffBuysCake("black forest");

// jeffBuysCake("black forest").then(partyAsPlanned).catch(buyCakeYourself);

// In JavaScript, we usually use promises to get or modify a piece of information. WHen the promise resolves, we do something
// with the data that comes back. When the promise rejects, we handle the error.

// getSomethingWithPromise()
//   .then((data) => {
//     /* do something with data */
//   })
//   .catch((err) => {
//     /* handle the error */
//   });

// =====================================
// Constructing a Promise
const promise = new Promise((resolve, reject) => {
  // DO SOMETHING HERE
  //   return resolve(27);
  return reject("BOO!");
});

promise.then((number) => console.log(number)).catch((err) => console.log(err));

// =====================================
const jeffBuysCake = (cakeType) => {
  return new Promise((resolve, reject) => {
    // Do something here
    setTimeout(() => {
      if (cakeType === "black forest") {
        resolve("black forest cake!");
      } else {
        reject("No cake :(");
      }
      // Checks if Jeff buys a black forest cake
    }, 1000);
  });
};

const jeffPromise = jeffBuysCake("black forest");
console.log(jeffPromise);

jeffPromise
  .then((cake) => console.log(cake))
  .catch((nocake) => console.log(nocake));
