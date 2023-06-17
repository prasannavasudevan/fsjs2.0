let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let now = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();

console.log(`${year}-${month+1}-${now} ${hours}:${minutes}`);
console.log(`${now}-${month+1}-${year} ${hours}:${minutes}`);
console.log(`${now}/${month+1}/${year} ${hours}:${minutes}`);