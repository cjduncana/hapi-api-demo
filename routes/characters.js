'use strict';

const asoiaf = require('asoiaf-api');

const routes = [];

// GET /characters
routes.push({
    method: 'GET',
    path: '/characters',
    handler: (request, reply) => reply(asoiaf.getAllCharacters())
});

// GET /characters/{characterID}
routes.push({
    method: 'GET',
    path: '/characters/{characterID}',
    handler: (request, reply) => {
        reply(asoiaf.getCharacterByID(request.params.characterID));
    }
});

module.exports = routes;
