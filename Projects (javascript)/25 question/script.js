const prompt=require("prompt-sync")({sigint:true});
 
// To find out the Body Mass Index-BMI

let weight = prompt("Enter your weight in kgs: ");
let height = prompt("Enter your height in meters: ");
let bmi = weight / (height * height);
console.log(bmi);
if(bmi < 18.5){
    console.log("You are skinny and beautiful, add some protien to ur diet");
}
else if(bmi >= 18.5 && bmi < 24.9){
    console.log("Look at u all fit..");
}
else if(bmi >= 24.9 && bmi <= 29.9){
    console.log("You are chubby and cute, move more and avoid junk foods");
}
else if(bmi > 30){
    console.log("Stop it or u'll burst out");
}