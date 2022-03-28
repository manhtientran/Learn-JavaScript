const bar = () => console.log("bar");

const baz = () => console.log("baz");

const baz2 = () => console.log("baz2");

// Example 1:
// const foo = () => {
//   console.log("foo");
//   bar();
//   baz();
// };

// foo();

// MESSAGE QUEUE: callback in setTimeout
// JOB QUEUE: result of and async function (Promise)

// =======================================================

// Example 2:
// const foo = () => {
//   console.log("foo");
//   setTimeout(bar, 0);
//   baz();
// };

// foo();

// =======================================================
// Example 3:
const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  new Promise((resolve, reject) => {
    resolve("should be right after baz, before bar");
  }).then((resolve) => console.log(resolve));

  baz();

  baz2();
};

foo();
