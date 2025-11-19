const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });
    const obj = {
      firstname: "John",
      lastname: "Doe",
      age: 25,
    };
    // data is serialized
    res.end(JSON.stringify(obj));
  })
  .listen(3000);
