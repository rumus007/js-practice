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


  module.exports = {
      askForNote,
      printNote,
      watchMovie,
      servicing
  }