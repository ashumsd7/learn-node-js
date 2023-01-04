// npm modules
const color = require("cli-color");

(function (name) {
    var x=12;
    console.log(">>>>>>>>>>",name)
})('Ashu');


// console.log(x)

console.log(color.bgBlue('Namaste'))



//local module


const auth =require('./auth')

console.log(auth)
auth.register('Ashutosh')
auth.login('username', '*****')

