const prompt=require("prompt-sync")({sigint:true});

let input = prompt("Enter a number: ");
for(let i = 0; i < input; i++){
    let row ="";
    for(let j=0; j<=i;j++){
    row = row + '*';
    }
    console.log(row);
}

let inputs = prompt("Enter a number: ");
for(let x = 0; x < inputs; x++){
    let row ="";
    for(let y=0; y<=inputs; y++){
    row = row + '*';
    }
    console.log(row);
}

function printPyramidPattern(n) {
    let pattern = '';
    let totalWidth = 2 * n - 1;
    let midpoint = Math.floor(totalWidth / 2);
  
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < totalWidth; j++) {
        if (j >= midpoint - i && j <= midpoint + i) {
          row += '*';
        } else {
          row += ' ';
        }
      }
      pattern += row + '\n';
    }
  
    console.log(pattern);
  }
  
  // Example usage
  let n = prompt("Enter a number: ");
  printPyramidPattern(n);
  