var fs = require("fs");
// fs.mkdir("dirc", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// fs.rmdir("dirc", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

fs.readdir("./dir", (err, files) => {
  if (err) {
    console.log(err);
  } else {
    console.log(files);
  }
});
