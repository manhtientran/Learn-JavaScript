const getBeefPromise = (_) => {
  const fridge = leftFridge;
  const beff = getBeffFromFridge(fridge);

  return new Promise((resolve, reject) => {
    if (beff) {
      resolve(beff);
    } else {
      reject(new Error("No more beef!"));
    }
  });
};

const cookBeffPromise = (beef) => {
  const workInProgress = putBeffInOven(beef);

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(workInProgress);
    }, 1000 * 60 * 20);
  });
};
