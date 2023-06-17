const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 23];

//To find the minimum age in the given array
let min = Math.min(...ages);

//To find the maximum age in the given array
let max = Math.max(...ages);

//To find the median age in the given array
let age = ages.sort();
if(age.length % 2 == 0){
   let middle_1 = Math.floor(age.length/2);
   let middle_2 = Math.floor((age.length/2)-1);
   let middle = (age[middle_1] + age[middle_2])/2;
   console.log("The Median of the given array is: " + middle);
}
else{
    let mid = Math.floor(age.length /2);
    console.log("The Median of the given array is: " + age[mid]);

}

//To find the average of the given array
let avg = 0;
for(let i =  0; i < age.length; i++){
    avg = avg + age[i];
}
avg = avg / age.length;

//To find the range of the given array
let range = max - min;

//To find the absolute difference using abs
let diffMax = Math.abs(avg - min);
let diffMin = Math.abs(avg - min);

console.log("The minimum age in the array is: ",min);
console.log("The maximum age in the array is: ",max);
console.log("The average of the given array is: " + avg);
console.log("The range of the given array is: " + range);
console.log("Absolute difference (min - average):", diffMin);
console.log("Absolute difference (max - average):", diffMax);
