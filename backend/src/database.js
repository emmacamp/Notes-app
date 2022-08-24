const mongoose = require('mongoose');

/* Getting the URI from the .env file. */

//! Debo resolver el problema del run dev

const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : console.log(`MongoDB URI not found.`);


//For mongoose conection
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
/* Creating a connection to the database. */
const connection = mongoose.connection;

/* A callback function that is called when the connection is established. */
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

