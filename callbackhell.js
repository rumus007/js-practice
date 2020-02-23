const services = require('./services.js');
// console.log(services);
/// #########TASK PART##############


//############TASK PART##############

// ####### EXECUTION PART################

// ####### EXECUTION PART################

console.log("start prepration for exam");
console.log("call a friend for note");
services.askForNote("js", function(err, done) {
  if (err) {
    console.log("error receiving note >>", err);
  } else {
    console.log("i received a note >>", done);
    console.log("note is in pdf now i have print note");
    services.printNote(done, function(err, done) {
      if (err) {
        console.log("error in printing note >> ", err);
      } else {
        console.log("success in printing note >>", done);
        services.watchMovie(function() {
          console.log("movie watching completed");
          //
          services.servicing(function() {
            console.log("bike servicing finished ");
            console.log("now i have to start preparing");
          });
          console.log("accident occur outside service center");
        });
        console.log("it started raining");
        console.log("mum arrive home");
      }
    });
    console.log("meet friends");
    console.log("have coffee");
  }
});
console.log("clean your room");
console.log("prepare pen pencils papers");
