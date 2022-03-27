// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// ----------------------------------------------------

// var, let, const
// const age = 30;

// let age = 30;
// age = 32;
// console.log(age);

// ----------------------------------------------------

// // String, Number, Boolean, null, undefined, Symbol
// const name = "John";
// const age = 30;
// const isCool = true;
// const rating = 4.5;
// const x = null;
// const y = undefined;
// let z; // will be UNDEFINED when only declaration, no initialization

// console.log(typeof x);

// ----------------------------------------------------
// const name = "John";
// const age = 32;

// // Concatenation
// console.log("My name is " + name + " and I am " + age);
// // Template String
// console.log(`My name is ${name} and I am ${age}`);

// ----------------------------------------------------
// const s = "Hello World";

// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0, 5));
// console.log(s.split(""));

// ----------------------------------------------------
// Arrays
// const numbers = new Array(1, 2, 3, 4, 5);

// Use "const" => we can modify the array, but we can't reassign "numbers" to other array
// const numbers = [1, 2, 3, 4, 5, 6, true, "apple"];
// // numbers = [];

// numbers.push("mango");
// numbers.unshift("strawberries");

// console.log(Array.isArray(numbers));

// console.log(numbers);
// console.log(numbers[1]);

// ----------------------------------------------------
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movie", "sport"],
//   address: {
//     street: "Test1",
//     city: "Test2",
//     state: "Test3",
//   },
// };

// console.log(person.firstName);
// console.log(person.hobbies[1]);

// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;

// console.log(firstName);
// console.log(city);
// person.email = "john@gmail.com";
// console.log(person);

// ----------------------------------------------------
// const todos = [
//   {
//     id: 1,
//     text: "Take out trash",
//     isCompleted: false,
//   },
//   {
//     id: 2,
//     text: "Meeting boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Go to appointment",
//     isCompleted: false,
//   },
// ];

// console.log(todos);
// console.log(todos[1].text);

// Convert to JSON to send to the server, for example.

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// // For Loop
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// // While Loop
// let i = 0;
// while (i < 10) {
//   console.log(`While loop: ${i}`);
//   i = i + 1;
// }

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for (let todo of todos) {
//   console.log(todo.text);
// }

// forEach, map, filter

// /todos.forEach(function (todo) {
//   console.log(todo.text);
// });

// const todoText = todos.map(function (todo) {
//   return todo.text;
// });

// console.log(todoText);

// const todoCompleted = todos
//   .filter(function (todo) {
//     return todo.isCompleted === true;
//   })
//   .map(function (todo) {
//     return todo.text;
//   });

// console.log(todoCompleted);

// ----------------------------------------------------
// const x = 6;
// const y = 10;

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// if (x > 5 || y > 10) {
//   console.log("x > 5 or y > 10");
// }

// if (x > 5 && y > 10) {
//   console.log("x > 5 and y > 10");
// }

// const x = 10;
// const color = x > 10 ? "red" : "blue";
// console.log(color);

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("HOLY");
//     break;
// }

// ----------------------------------------------------
// function addNums(num1 = 1, num2 = 1) {
//   //   console.log(num1 + num2);
//   return num1 + num2;
// }

// addNums();
// console.log(addNums(5, 4));

// const addNums2 = (num1 = 1, num2 = 1) => {
//   return num1 + num2;
// };

// console.log(addNums2(5, 4));

// / todos.forEach((todo) => console.log(todo));

// ----------------------------------------------------
// Constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function () {
//   return this.dob.getFullYear();
// };

// Person.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// Class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }

//   getBirthYear() {
//     return this.dob.getFullYear();
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// // Instantiate object
// const person1 = new Person("John", "Doe", "3-2-2132");
// const person2 = new Person("Jggg", "Dgg", "3-2-2432");
// console.log(person1.dob.getFullYear());

// // console.log(person1.getBirthYear());
// // console.log(person1.getFullName());
// console.log(person2.getFullName());
// console.log(person1);

// ----------------------------------------------------
// console.log(window);

// Single element
// console.log(document.getElementById("my-form"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("h1"));

// // Multiple element
// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items = document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));

// const ul = document.querySelector(".items");
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "Mike";
// ul.lastElementChild.innerHTML = "<h4>YEAH</h4>";

// const btn = document.querySelector(".btn");
// // btn.style.background = "red";
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e);
//   //   console.log("click");
//   document.querySelector("#my-form").style.background = "#ccc";

//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>Hello</h1>";
// });

// ----------------------------------------------------
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  //   console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
