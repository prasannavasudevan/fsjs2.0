const prompt=require("prompt-sync")({sigint:true});
let mark = prompt("Enter your total mark: ");
let grade = "";
if(mark <= 100 && mark >= 89){
 grade = 'A';
}
else if(mark <= 89 && mark >= 70){
  grade = 'B';
}
else if(mark <= 69 && mark >= 60){
    grade = 'C';
}
else if(mark <= 59 && mark >= 50){
    grade = 'D';
}
else if(mark <= 49 && mark >= 40){
    grade = 'E';
}
else if(mark <= 49 && mark >= 0){
    grade = 'F';
}
console.log("Your grade is: " + grade);