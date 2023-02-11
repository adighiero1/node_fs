const { appendFile } = require("fs");
appendFile("./HelloWorld.txt", "Hello there appended", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
  }
});
