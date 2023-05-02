const { readFile } = require("fs");

readFile("./HelloWorld.txt", (err, contents) => {
  if (err) {
    console.log(err);
  } else {
    let content = contents.toString();
    console.log(content.replace(/l/g, "1"));
  }
});

// const { readFile } = require("fs");
// readFile("./HelloWorld.txt", (err, contents) => {
//   if (err) {
//     console.log(err);
//   } else {
//     let content = data.toString();
//     console.log(contents.replace(/l/g, "1"));
//   }
// });
