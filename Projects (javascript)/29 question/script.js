const prompt=require("prompt-sync")({sigint:true});
 
function printFileExtension(filename) {
    const extensionType = filename.split('.');
    let extension = extensionType.pop();
    console.log('File extension:', extension);
  }
  

let input = prompt("Enter the final name including the file type: ");
printFileExtension(input);

