'use strict';

const server = require('./lib/server');

return server.start()
.then(() => {
    console.log('Server up and running at: ' + server.info.uri);
})
.catch((err) => {
    console.error(err.stack);
});
