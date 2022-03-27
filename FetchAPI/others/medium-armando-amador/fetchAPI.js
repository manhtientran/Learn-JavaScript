const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");

let data = "";

fetchPromise.then((res) => res.json).then((data) => console.logg(data));
console.log(OB);
