const prompt=require("prompt-sync")({sigint:true});
let age = prompt("Enter your age: ");
if(age >= 18){
    console.log("You are old enough to drive");

}
else{
    age = 18 - age;
    console.log(`You have to wait for ${age} years to drive`);
}