const fs = require('fs');
//task part
function getFileFromUser(path){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            fs.readFile(path,function(err,data){
                if(err){
                    reject(err);
                    return;
                } 
                resolve(data);
            });
        }, 2000);
    });
}
//execution part

getFileFromUser("index.html")
    .then(function(data){
        console.log("what comes in success>>", data);
    })
    .catch(function(err){   
        console.log("wgat comes in err>>",err);
    });

//non-blocking task
console.log('Non blocking task1');    
console.log('Non blocking task2');    
console.log('Non blocking task3');    
console.log('Non blocking task4');    
