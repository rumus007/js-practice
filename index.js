const http = require('http');
const fs = require('fs');
const PORT = 3000;


//task
function getHtml(path, callback){
    const fileName = __dirname+'/'+path;
    console.log(fileName);
    fs.readFile(fileName, (err, data)=> {
if(err){
    callback(err);
    return;
}
callback(null, data);
    });
    

}



//execution
const server = http.createServer(function(request,response) {
    // getHtml('index.html')
    //     .then((data) => {    
    //         response.writeHead(200,{"Content-Type": "text/html"});
    //         response.write(data);
    //         response.end();
    //     })
    //     .catch(err => {
    //         response.writeHead(404,{"Content-Type": "text/html"});
    //         response.write("NOT FOUND");
    //         response.end();
    //     })

    getHtml('index.html', function(err, data){
        if(err){
            response.writeHead(404,{"Content-Type": "text/html"});
            response.write("NOT FOUND");
            response.end();
            return;
        }
        response.writeHead(200,{"Content-Type": "text/html"});
                response.write(data);
                response.end();
    });

});
server.listen(PORT, console.log("server started"));

