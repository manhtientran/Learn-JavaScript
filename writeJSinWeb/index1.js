Promise.resolve().then(() => console.log("promise1 resolved"));

Promise.resolve().then(() => {
  console.log("promise2 resolved");
  process.nextTick(() =>
    console.log("next tick inside promise resolve handler")
  );
  Promise.resolve().then(() => console.log("promise inside resolved"));
});

Promise.resolve().then(() => console.log("promise3 resolved"));
setImmediate(() => console.log("set immediate1"));

process.nextTick(() => {
  console.log("next tick1");
  process.nextTick(() => console.log("next tick inside next tick handler"));
  Promise.resolve().then(() => console.log("promise inside next tick handler"));
});

process.nextTick(() => console.log("next tick2"));

setTimeout(() => {
  console.log("set timeout", 0);
  Promise.resolve().then(() =>
    console.log("promise inside settimeout handler")
  );
  process.nextTick(() => console.log("next tick inside settimeout handler"));
});

setImmediate((_) => {
  console.log("set immediate2");
  Promise.resolve().then(() =>
    console.log("promise inside setImmediate handler")
  );
  process.nextTick(() => console.log("next tick inside setImmediate handler"));
});

setImmediate(() => console.log("set immediate3"));
