const express = require('express');
const cors = require('cors');

/* Creating an instance of express. */
const app = express();

//Setting 
app.set('port', process.env.PORT || 4000);

//Middlewars
app.use(cors());
app.use(express.json());


//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;
