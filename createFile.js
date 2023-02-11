const { writeFile } = require("fs");

writeFile("./HelloWorld.txt", "Hello World!", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});
