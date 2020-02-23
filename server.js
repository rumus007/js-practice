const http = require('http');
const fs = require('fs');
const PORT = 3000;


const getHtml = (path) => {

    return new Promise((resolve,reject) => {
        // Filename
        const fileName = __dirname+'/'+path;
        console.log(fileName);
        // Read 
        fs.readFile
        fs.readFile( fileName, (err, data) => {
          if (err) {
              reject(err)
          };
          
          resolve(data);
        });
    });
}



const server = http.createServer(function(request,response) {
    getHtml('index.html')
        .then((data) => {    
            response.writeHead(200,{"Content-Type": "text/html"});
            response.write(data);
            response.end();
        })
        .catch(err => {
            response.writeHead(404,{"Content-Type": "text/html"});
            response.write("NOT FOUND");
            response.end();
        })

});


server.listen(PORT, console.log("server started"));