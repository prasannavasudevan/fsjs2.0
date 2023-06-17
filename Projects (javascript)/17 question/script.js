const prompt = require("prompt-sync")({ sigint: true });

let month = prompt("Enter the month: ");
let year = parseInt(prompt("Enter the year: "));

// Define an object with the number of days in each month
const daysInMonth = {
    january: 31,
    february: 28,
    march: 31,
    april: 30,
    may: 31,
    june: 30,
    july: 31,
    august: 31,
    september: 30,
    october: 31,
    november: 30,
    december: 31,
}

// Get the number of days based on the input month
if (month in daysInMonth) {
    let numDays = daysInMonth[month];
    console.log(`The number of days in ${month} ${year} is ${numDays}.`);
} else {
    console.log("Enter a valid month name.");
}
