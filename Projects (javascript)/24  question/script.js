let even = [];
let odd = [];

for(let i=0; i<=100; i++){
    if(i%2 == 0){
     even.push(i);
    }
    else{
     odd.push(i);
    }
}
console.log("The odd num array: ");
console.log(odd);
console.log("The even num array: ");
console.log(even);