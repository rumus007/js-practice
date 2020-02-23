//task part
function askForNote(title) {
    return new Promise(function(resolve, reject) {
        console.log('phone received by friend and promise to callback');
        console.log('note found and start uploading to drive');
        setTimeout(function() {
            console.log('3 hours taken to upload a note');
            console.log('now call back to friend with note');
            resolve({
                pdfNote: title
            });

        }, 3000);
    });
}


function printNote(pdf) {
    return new Promise(function(resolve, reject) {
        console.log('note is at stationary for printing');
        var electricity = true;
        if (electricity) {
            console.log('electricity availabel procced printing');
            setTimeout(function() {
                console.log('two hour taken to print note');
                resolve('printed note');
            }, 2000);
        } else {
            console.log('no electricity cannot print ')
            reject('no-electricity');
        }
    })

}

function watchMovie() {
    return new Promise(function(resolve, reject) {
        console.log('start watching movie');
        setTimeout(function() {
            resolve();
        }, 1000);

    });
}

function servicing() {
    return new Promise(function(resolve, reject) {
        console.log('bike is at service center');
        setTimeout(function() {
            resolve();
        }, 2000);
    })
}


//execution part
console.log('start studying for exam');
console.log('call friend for note');
askForNote('js')
    .then(function(data){
        console.log("I recieved note>>",data);
        console.log("now i have to print");
        return printNote(data.pdfNote);
    })
    .then(function(data){
        console.log(data);
        return watchMovie();
    })
    .then(function(data){
        console.log("movie finished")
        return servicing();
    })
    .then(function(data){
        console.log("servicinf finised");
    })
    .catch(function(err){
        console.log("in errror blokc>>",err);
    });
//non-blocking task
console.log("clean room");
console.log("prepare pen pencil");
     
