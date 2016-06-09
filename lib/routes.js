'use strict';

const fs = require('fs');
const _ = require('lodash');

const Routes = {
  register: function(server, options, next) {
    server.logger.info('Loading routes...');
    fs.readdirSync('routes').forEach((file) => {
      _.each(require(`../routes/${file}`), (routes) => {
        server.bind(server);
        server.route(routes);
      });
    });
    server.logger.info('Routes loaded!');
    next();
  }
};

Routes.register.attributes = {
  name: 'Routes',
  version: '1.0.0'
};

module.exports = Routes;
