var fs = require("fs");

// Asynchronous - Opening File
// console.log("Going to open file!");
// fs.open('input.txt', 'a+', function(err, fd) {
//    if (err) {
//        return console.error(err);
//    }
//   console.log("File opened successfully!");     
// });

fs.appendFile("input.txt", "\n Made by GQQ", function(err) {
    if (err) {
        console.error(err);
        return;
    }
    console.log("modify file correctly.");
})
