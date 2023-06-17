const prompt=require("prompt-sync")({sigint:true});

// To print the multiplication table for the given user input

let input = prompt("Enter a number: ");
for(let i = 1; i<=10; i++){
    let multiple = input *i;
    console.log(`${input} * ${i} = ${multiple}`);
}
