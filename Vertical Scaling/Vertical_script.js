//// single server

const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Handled by single powerful server");
    res.end();
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});







