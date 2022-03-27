app.post("/buy-thing", (req, res) => {
  const customer = req.body;

  // First operation
  chargeCustomer(customer, (err, charge) => {
    if (err) throw err;

    // Add to database here
    addToDatabase(customer, (err, document) => {
      if (err) throw err;
    });

    // Send email here
    sendEMail(customer, (err, result) => {
      if (err) throw err;

      res.send("success");
    });
  });
});

app.post("/buy-thing", (req, res) => {
  const customer = req.body;

  chargeCustomer(customer)
    .then(
      // Add to database
      (_) => addToDatabase(customer)
    )
    .then(
      // Send email
      (_) => sendEmail(customer)
    )
    .then((result) => res.send("success!"))
    .catch((err) => console.log(err));
});

// Firing off multiple promises at once

const friesPromise = getFries();
const burgerPromise = getBurger();
const drinksPromise = getDrinks();

const eatMeal = Promise.all([friesPromise, burgerPromise, drinksPromise]).then(
  ([fries, burger, drinks]) => {
    console.log(burder);
    console.log(fries);
    console.log(drink);
  }
);
