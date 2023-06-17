const prompt = require("prompt-sync")({ sigint: true });

let input = prompt("Enter the month: ");
let season = '';

if (input === 'september' || input === 'october' || input === 'november') {
    season = 'Autumn';
}
if (input === 'december' || input === 'january' || input === 'february') {
    season = 'Winter';
}
if (input === 'march' || input === 'april' || input === 'may') {
    season = 'Spring';
}
if (input === 'june' || input === 'july' || input === 'august') {
    season = 'Summer';
}

if (season !== '') {
    console.log("The season is: " + season);
} else {
    console.log("Enter the month name properly");
}
