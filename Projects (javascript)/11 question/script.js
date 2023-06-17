let date = new Date();
console.log("The year is:",date.getFullYear());
console.log("The Month is:",date.getMonth());
console.log("The date is:",date.getDate());
console.log("The day is:",date.getDay());
console.log("The hour is:",date.getHours());
console.log("The minute is:",date.getMinutes());
// number of seconds elapsed from Jan 1 1970 to now
let firstDay = new Date('1970-1-1');
let timeDiff = date - firstDay;
console.log("The time difference is: " + Math.floor(timeDiff/1000) + " seconds");
