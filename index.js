const fs = require("fs");
const path = require("path");
let files = ["createFile", "readfile", "updateFile", "deleteFile"];
let ext = ".js";
let template = `const fs= require("fs");`;

let folder = "src";
if (fs.existsSync(folder)) {
  makeFiles();
} else {
  fs.mkdir(path.join(__dirname, folder), (err) => {
    if (err) {
      console.log(err);
      console.log("failed to create the folder!");
    } else {
      console.log("folder created!");
      makeFiles();
    }
  });
}

function makeFiles() {
  files.forEach((name) => {
    fs.writeFile(path.join(__dirname, `./${name}${ext}`), template, (err) => {
      if (err) {
        console.log(err);
        console.log("Failed to write to" + name + ext);
      } else console.log("Successfully wrote the file");
    });
  });
}

// files.forEach((name) => {
//   fs.unlink(path.join(__dirname, `./${name}${ext}`), (err) => {
//     if (err) {
//       console.log(err);
//       console.log("Failed to delete " + name + ext);
//     } else console.log("Successfully deleted the file");
//   });
// });
