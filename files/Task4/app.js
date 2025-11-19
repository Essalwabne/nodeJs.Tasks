const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "/text");

// read file synchronously
const data = fs.readFileSync(`${dirPath}/input.txt`, "utf8");


 const upeerData = data.toUpperCase();
 fs.writeFileSync(`${dirPath}/output.txt`, upeerData);
  

  