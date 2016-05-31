'use strict';

const asoiaf = require('asoiaf-api');

const routes = [];

// GET /books
routes.push({
    method: 'GET',
    path: '/books',
    handler: (request, reply) => reply(asoiaf.getAllBooks())
});

// GET /books/{bookID}
routes.push({
    method: 'GET',
    path: '/books/{bookID}',
    handler: (request, reply) => {
        reply(asoiaf.getBookByID(request.params.bookID));
    }
});

module.exports = routes;
