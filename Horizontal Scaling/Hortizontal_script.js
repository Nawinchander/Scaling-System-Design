const cluster = require("cluster");
const http = require("http");
const os = require("os");

const numCPUs = os.cpus().length;

if (cluster.isMaster) {

    console.log(`Master process running`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

} else {

    http.createServer((req, res) => {
        res.write(`Handled by worker ${process.pid}`);
        res.end();
    }).listen(3000);

}