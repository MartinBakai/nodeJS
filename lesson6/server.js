//HTTP module
const http = require('http');
const fs = require('fs');
const path = require('path');

//Class for handle requests
class RequestHandler {
    constructor() {
        console.log('Create new class');
    }
    responder(req, res) {
        res.end('Hello NodeJS!');
    }
}

class Person {
    constructor(name = 'noname'){
        this.name = name;
    }
    greeting(){
        return this.collectGreeting(this.name);
    }
    collectGreeting(name){
        return 'Hello, my name is ' + name + '!';
    }

}

//Responder
function responder(request, response) {
    logger('message: ', 'Szia', 'mizu', 'hogyvagy?', 'viszlát');
    response.end('Hello NodeJS!');
}
//test
const logger = (key = 'logger:', ...messages) => {

    for (let k in messages) {
        console.log(key, messages[k]);
    }
    console.log('Halika');
};

//Create Server
let handler = new RequestHandler();
const server = http.createServer(function (request, response) {
    handler.responder(request, response);

});

//Listen port
server.listen(8080);
logger();
