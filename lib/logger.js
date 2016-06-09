'use strict';

const bunyan = require('bunyan');
const config = require('../config/logs');

const log = bunyan.createLogger(config);

const Logger = {
  register: function(server, options, next) {
    server.decorate('server', 'logger', log);
    return next();
  }
};

Logger.register.attributes = {
  name: 'Logger',
  version: '1.0.0'
};

module.exports = Logger;
