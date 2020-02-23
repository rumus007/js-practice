//task part


const fs = require("fs");

function create(content,name){
    let path = __dirname+'/files/'+name; 
    return new Promise(function(resolve, reject){
        fs.writeFile(path,content,"utf8", function(err, done){
            if(err){
                reject(err);
                return;
            }
            resolve(done);
        })
    });
}

function read(name){
    let path = __dirname+'/files/'+name;
    return new Promise(function(resolve,reject){
        fs.readFile(path,function(err,done){
            if(err){
                reject(err);
                return;
            }
            resolve(done);
        })
    })
}
module.exports={
    create,
    read
}