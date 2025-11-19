//עיסא לואבני  324930908

const fs = require("fs"); // File system module
const path = require("path"); // Path utilities
const Math = require("mathjs"); // For randomInt()

const dirPath = path.join(__dirname, "/text"); // folder path for input/output files

// -------- CREATE 3 INPUT FILES --------
for (let i = 0; i < 3; i++) {
  const fileName = path.join(dirPath, `input${i + 1}.txt`);
  const randomNum = Math.randomInt(1, 100); // random number of lines

  let s = "";
  for (let j = 1; j < randomNum; j++) {
    s += String.fromCharCode(97 + i) + j + "\n"; // generate random text lines
  }

  s = s.slice(0, -1); // remove last newline
  fs.writeFileSync(fileName, s); // write the file
}

// -------- READ GROUPS OF LINES --------
let iStart = 0; // starting index for each round
let string = []; // final output storage
let round = 1; // number of lines to read each round

const files = [1, 2, 3].map((k) => `input${k}.txt`); // file names

// load all files into arrays of lines
let [lines1, lines2, lines3] = [1, 2, 3].map((k) => {
  const currentPath = path.join(dirPath, `input${k}.txt`);
  return fs.readFileSync(currentPath, "utf-8").trim().split(/\r?\n/);
});

const lines = [lines1, lines2, lines3]; // all file lines in one array
const maxLines = Math.max(...lines.map((arr) => arr.length)); // longest file length

// -------- PROCESS IN ROUNDS --------
while (iStart < maxLines) {
  let st = ""; // reset output block for this round

  lines.forEach((fileNumber, index) => {
    const filename = files[index]; // current file name

    // check if this file still has lines in this range
    if (iStart < fileNumber.length) {
      const selected = fileNumber.slice(iStart, iStart + round); // get lines for this round

      selected.forEach((data) => {
        st += `${filename}: ${data}\n`; // append to output block
      });
    }
  });

  string.push(st); // save this round
  iStart += round; // move to next starting index
  round++; // next round reads more lines
}

// -------- WRITE OUTPUT FILE --------
fs.writeFileSync(
  path.join(dirPath, "output.txt"),
  string.join("\n") // join rounds with newline
);
