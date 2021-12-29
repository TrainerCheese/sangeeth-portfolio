// Setup
const http = require("http");
const hostname = "localhost";
const port = 80;

// Server setup
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.statusCode = 200;
  res.end("This is your example server!");
});

// Server listening
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}`);
});
