'use strict';

const server = require('./lib/server');

server.start(() => console.log(`Server running at ${server.info.uri}`));
