const path = require("path");
console.log(path.sep);// separator for different OS like / or \ 
const filePath = path.join( "content", "subfolder", "test.txt");//the output will be content/subfolder/test.txt

console.log(filePath);
const base = path.basename(filePath);
console.log(base); // the output will return the last part of the path i.e. test.txt
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);// the output will be the absolute path

