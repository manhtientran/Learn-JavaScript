// const getOne = async (_) => {
//   return 1;
// };

// const promise = getOne();

// const test = async (_) => {
//   console.log(promise);
//   const res = await promise;
//   console.log(res);
//   return res;
// };

// console.log(typeof promise);
// console.log(typeof promise.__proto__);
// console.log(typeof promise.__proto__.__proto__);

// console.log(promise);
// console.log("===============");
// test();
// console.log("===============");
// console.log(test());

// ====================================================================

// const getOne = async (_) => {
//   return 1;
// };

// const res = getOne().then((value) => value);

// getOne().then((value) => console.log(value));

// console.log(res);

// ====================================================================
// const getOne = async (_) => {
//   return 1;
// };

// let temp = 1;

// getOne().then((value) => {
//   temp = value;
// });

// console.log(temp);

// ====================================================================
// const getOne = async (_) => {
//   //   return 1;
//   return new Promise((resolve, reject) => resolve("BOO!"));
//   //   return new Promise((resolve, reject) => reject("BOO!"));
// };

// // getOne().then((value) => {
// //   console.log(value);
// // });

// console.log(getOne());

// console.log("===============");

// const test = async (_) => {
//   const one = await getOne();
//   console.log(one);
// };

// test();

// ====================================================================
const getOne = async (success = true) => {
  if (success) return 1;
  throw new Error("fail");
};

// getOne(true)
//   .then(() => console.log("Mike Tran"))
//   .catch((err) => console.log(err));

// CASE 1
// const test = async (_) => {
//   try {
//     const one = await getOne(false);
//     console.log(one);
//   } catch (error) {
//     console.log(error);
//   }
// };
// test();

// CASE 2
const test = async (_) => {
  const one = await getOne(true);
  const two = await getTwo(false);
  const three = await getThree(false);
};

test().catch((error) => console.log(error));
