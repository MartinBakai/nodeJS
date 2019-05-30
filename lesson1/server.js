//console.log( 'Hello NodeJS!');
//HTTP module
var http = require('http');
var fs = require('fs');
var path = require('path');

//Responder
function responder(request, response){
    logger('message: ', 'Szia', 'mizu', 'hogyvagy?', 'viszlát');
    response.end('Hello NodeJS!');
}
//test
var logger = (key = 'logger:', ...messages) => {
    for (var k in messages){
        console.log(key, messages[k]);
    }
    console.log('Halika');
};

//Create Server
var server = http.createServer(function(request, response){
    responder(request, response);
});

//Listen port
server.listen(8080);
logger();