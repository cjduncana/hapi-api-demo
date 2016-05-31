'use strict';

const asoiaf = require('asoiaf-api');

const routes = [];

// GET /houses
routes.push({
    method: 'GET',
    path: '/houses',
    handler: (request, reply) => reply(asoiaf.getAllHouses())
});

// GET /houses/{houseID}
routes.push({
    method: 'GET',
    path: '/houses/{houseID}',
    handler: (request, reply) => {
        reply(asoiaf.getHouseByID(request.params.houseID));
    }
});

module.exports = routes;
