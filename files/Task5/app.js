// AR: نستخدم نسخة الـ Promises من fs لتعمل await
// HE: משתמשים בגרסת ה-Promises של fs כדי ש-await יעבוד
const fs = require("fs");
const { re } = require("mathjs");
const path = require("path");
const dirPath = path.join(__dirname, "text");
const outPutPath = path.join(dirPath, "output.txt");
const inputPath = path.join(dirPath, "input.txt");

fs.readFile(inputPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const newString = "processed by node.js";
  fs.writeFile(inputPath, newString, (err) => {
    if (err) {
      console.error("Error appending to file:", err);
    }
    console.log("Successfully appended to file");
    fs.writeFile(outPutPath, data, (err) => {
      if (err) {
        console.error("Error writing to output file:", err);
        return;
      }
      console.log("Successfully wrote to output file");
    });
  });
});
console.log("End of File");
