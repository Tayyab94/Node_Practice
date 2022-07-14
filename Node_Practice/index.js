const http = require("http");

function dataControl(req, res) {
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify({ name: "Tayyab", email: "meriEmail@gmail.com" }));
  res.end();
}

http.createServer(dataControl).listen(4500);
