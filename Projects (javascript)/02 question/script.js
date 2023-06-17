const prompt=require("prompt-sync")({sigint:true});
let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
let age = prompt("Enter your age: ");
let country = prompt("In which country do u live in: ");
let Ms = prompt("What is your martial status: ");
console.log(`I am ${firstName} ${lastName}, ${age} year old, i live in ${country}, and i am ${Ms}.`);
