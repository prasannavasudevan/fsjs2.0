const prompt=require("prompt-sync")({sigint:true});
 
let user = prompt("Enter a symbol +-*%/... : ");
let input1 = parseFloat(prompt("Enter the first value: "));
let input2 = parseFloat(prompt("Enter the second value: ")); 
let output;

if(isNaN(input1) || isNaN(input2)){
    console.log("Invalid input. Please enter numeric values...");
}
else{
switch(user){
    case '+': output = input1 + input2;
    break;

    case '-': output = input1 - input2;
    break;

    case '*': output = input1 * input2;
    break;

    case '/': output = input1 / input2;
    break;

    case '%': output = input1 % input2;
    break;

    default: console.log("Enter a valid input");

}
}
 
console.log(output);