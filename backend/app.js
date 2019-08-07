const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');


//app logs
app.use(morgan('dev'));

// read cookies (needed for auth)
app.use(cookieParser()); 

//parse the body of incoming requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



//settings to avoid cors errors
app.use((req, res, next) => {
    //change * to platform URL give access to only one website (apps like postman will still have access)
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Accept, x-access-token, Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    //favicon fix
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        return;
    }
    next();
});




//Routes
//main route
require('./api/router/routes.js')(app);


app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});




//database connection
const db = require('./api/config/db.config.js');
const Role = db.role;



//Errors
//ERR - page not found
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

//ERR - all other kinds of errors
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
