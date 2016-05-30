'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000
});

server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply('Hello Hapi!');
    }
});

function start() {
    return server.start();
}

exports.start = start;
exports.server = server;
