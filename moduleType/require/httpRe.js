const os=require("os")
const userName=os.userInfo().username

console.log(`Hello, ${userName}! Welcome to the HTTP server.`);
