// To find out the prime numbers between 0 to 100

function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let primeNumbers = [];
  for (let num = 0; num <= 100; num++) {
    if (isPrime(num)) {
      primeNumbers.push(num);
    }
  }
  
  console.log("Prime numbers between 0 and 100:");
  console.log(primeNumbers);
  

// let isPrime = [];
//   for (let i = 0; i <= 100; i++) {
//     if (i % i === 0) {
     
//     }
//     else{
//         isPrime.push(i);
//     }
//   }

//   console.log(isPrime);

