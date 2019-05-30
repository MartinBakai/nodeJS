const http = require('http');

const httpServer = http.createServer(function(request, response) {
    response.writeHead (200, {'Content-type' : 'text/html'});
    response.end('First Server what i ever created!');
});

class GetHandler {
    constructor(req, res){
    }
    getContent(req){
        if (req.url == '/'){
            req.send;
        }else{
            function getError(){
                httpServer.response(404);
            };
        }
    }

}

httpServer.listen(3331);