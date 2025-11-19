const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "text");
const userCounter = path.join(dirPath, "userCounter.txt");
const userName = path.join(dirPath, "userName.txt");
const jsonFile =path.join(dirPath, "users.json");

fs.readFile(jsonFile, "utf8", (err, jsonData) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }
// Parse JSON data to object
  const users_obj = JSON.parse(jsonData);
  const userCount = users_obj.length;

  fs.writeFile(userCounter, userCount.toString(), (err) => {
    if (err) {
      console.error("Error writing user count to file:", err);
      return;
    }
    console.log("Successfully wrote user count to file");
  });

  const names = users_obj.map(user => user.name).join("\n");

  fs.writeFile(userName, names, (err) => {
    if (err) {
      console.error("Error writing user names to file:", err);
      return;
    }
    console.log("Successfully wrote user names to file");
  });
});


