/// #########TASK PART##############
function askForNote(title, cb) {
  console.log("phone received by friend and promise to callback");
  console.log("note found and start uploading to drive");
  setTimeout(function() {
    console.log("3 hours taken to upload a note");
    console.log("now call back to friend with note");
    cb(null, {
      pdfNote: title
    });
  }, 3000);
}

function printNote(pdf, cb) {
  console.log("note is at stationary for printing");
  var electricity = true;
  if (electricity) {
    console.log("electricity availabel procced printing");
    setTimeout(function() {
      console.log("two hour taken to print note");
      cb(null, "printedNote");
    }, 2000);
  } else {
    console.log("no electricity cannot print ");
    cb("no-electricity");
  }
}

function watchMovie(cb) {
  console.log("start watching movie");
  setTimeout(function() {
    cb();
  }, 1000);
}

function servicing(cb) {
  console.log("Take bike to service center");
  setTimeout(function() {
    cb();
  }, 2000);
}

//############TASK PART##############

// ####### EXECUTION PART################

// ####### EXECUTION PART################

console.log("start prepration for exam");
console.log("call a friend for note");
askForNote("js", function(err, done) {
  if (err) {
    console.log("error receiving note >>", err);
  } else {
    console.log("i received a note >>", done);
    console.log("note is in pdf now i have print note");
    printNote(done, function(err, done) {
      if (err) {
        console.log("error in printing note >> ", err);
      } else {
        console.log("success in printing note >>", done);
        watchMovie(function() {
          console.log("movie watching completed");
          //
          servicing(function() {
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
