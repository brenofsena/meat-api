"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const users_router_1 = require("./users/users.router");
const server = new server_1.Server();
server.bootstrap([users_router_1.usersRouter]).then(server => {
    console.log('Server on listening on:', server.application.address().port);
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
