const http = require('http');
const app = require('./app');


const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, function(err) {
 
    if (!err)
        console.log("Server Live");
    else console.log(err)
 
});

