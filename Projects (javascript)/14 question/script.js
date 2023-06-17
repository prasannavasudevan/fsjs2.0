const prompt=require("prompt-sync")({sigint:true});
let num = prompt("Enter a number: ");
if(num % 2 == 0){
    console.log("The given number is even");
}
else{
    console.log("The given number is odd");
}