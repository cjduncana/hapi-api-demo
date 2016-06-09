'use strict';

const Hapi = require('hapi');
const promise = require('bluebird');

const server = new Hapi.Server();
server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 8000
});

const plugins = [
  require('./logger'),
  require('./routes')
];

function register() {
  return server.register(plugins);
}

exports.register = register;

function initialize() {
  if (server.models) {
    return promise.resolve();
  }
  return register(plugins)
  .then(server.initialize.bind(server));
}

exports.initialize = initialize;

function start() {
  return register(plugins)
  .then(server.start.bind(server));
}

exports.start = start;

exports.info = server.info;

exports.server = server;
