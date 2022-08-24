//Envaironment variables
require('dotenv').config({ path: '.env' });

//Express
const app = require('./app');

//Database
require('./database')

/* Getting the port from the app.js file or the environment variable. */
const PORT = app.get('port');
/* Creating a variable called server and assigning it the value of the localhost and the port number. */
const server = `http://localhost:${PORT}`;

/**
 * The main function is an asynchronous function that waits for the app to listen on the port, then
 * logs a message to the console.
 */
async function main() {
    await app.listen(PORT);
    console.log(`Server running at ${server}`);
}


/* Calling the main function. */
main();