// #######################task part###################

function askForVideo(title, callback) {
    // console.log('what comes in ', callback);
    // helper inbuilt method// built-in
    console.log('Friend will call me back in few hours');
    var electricity = false;
    setTimeout(function() {
        if (electricity) {
            callback(null, 'Friend sent me video in google drive');
        } else {
            callback('Friend did not send me video');
        }
        // return 'hello ' + name;
        // return wont work in case of time consuming task
        // if callbck takes arugment we can pass argument
    }, 2000);
}






// #########################task part#######################

// execution part
// var res1 = sayHi();
// console.log('res1 is >>>', res1);

console.log('Code execution started');
console.log('Want to watch a movie');
console.log('Ask a friend for movie call friend');

askForVideo('ram', function(err, done) {
    if (err) {
        console.log('failure in callback>>>>', err);
        console.log('video not received plase try alternate idea');
        return;
    }
    console.log('success in callback>>>>', done);
    console.log('watch movie now');
});
console.log('eat food - nonblocking ');
console.log('another task - nonblocking');
