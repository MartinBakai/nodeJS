//HTTP module
const http = require('http');
const fs = require('fs');
const path = require('path');
let num = 0;

//Responder
function responder(request, response){
    logger('message: ', 'Szia', 'mizu', 'hogyvagy?', 'viszlát');
    response.end('Hello NodeJS!');
}
//test
const logger = (key = 'logger:', ...messages) => {

    for (let k in messages){
        console.log(key, messages[k]);
    }
    ++num;
    console.log('Halika', num);
};

//Create Server
const server = http.createServer(function(request, response){
    responder(request, response);
});

//Listen port
server.listen(8080);
logger();
