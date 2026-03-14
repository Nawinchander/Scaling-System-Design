const servers = ["Server1", "Server2", "Server3"];
let index = 0;

function loadBalancer(request) {
    const server = servers[index];
    index = (index + 1) % servers.length;
    return server;
}

console.log(loadBalancer());
console.log(loadBalancer());
console.log(loadBalancer());




