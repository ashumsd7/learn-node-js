// npm modules
// const color = require("cli-color");

// (function (name) {
//   var x = 12;
//   console.log(">>>>>>>>>>", name);
// })("Ashu");

// console.log(x)

// console.log(color.bgBlue("Namaste"));

//local module

// const auth = require("./auth");

// console.log(auth);
// auth.register("Ashutosh");
// auth.login("username", "*****");

// //code modules

const path = require("path");
// const { dirname } = require("path");

// //path gives multiple functions

// // get absolute path
// console.log(path.dirname(__filename), 'foldername')
// //get file name
// console.log(path.basename(__filename), 'file name')
// //get extension
// console.log(path.extname(__filename), 'extension name')
// //parse
// console.log(path.parse(__filename), 'lets parse')
// //join ( and get url)
// console.log(path.join(__dirname,'order'), 'join')

//FIle system module

// fs

const fs = require("fs");

fs.mkdir(path.join(__dirname, "/test"), (err) => {
  if (err) {
    console.log("ERROR",err);
    return;
  }

  console.log("folder created");
});
