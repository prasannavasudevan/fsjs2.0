
const prompt=require("prompt-sync")({sigint:true});  
let number = prompt("Enter a number: ");
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
const isNumberPrime = isPrime(number);

if (isPrime(number)) {
    console.log(number + ' is a prime number');
  } else {
    console.log(number + ' is not a prime number');
  }