
function buyCar(model, amount, cb) {
	//check what comes in cb
    console.log('i am at car show room to get a car');
    console.log('owner insist me to wait for a week to get a new model');
    setTimeout(function() {
        console.log('1 week passed');
        console.log(" car arrived at showroom");
        console.log(' now callback to customer whoever request to buy car');
        cb();
    }, 4000);

    //  task
}

console.log('code execution started ');
console.log('want to buy car ');
buyCar('xyz', 3333, function() {
    console.log('i received a call from showroom');
    console.log('no i have a car');
    console.log('now i can go for ride');
    console.log('perform blocking task');
});
//result should be handled here

console.log('eat food - nonblocking task');
console.log('meet friends - nonblocking task');
