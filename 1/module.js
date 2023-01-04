// npm modules
const color = require("cli-color");

(function (name) {
    var x=12;
    console.log(">>>>>>>>>>",name)
})('Ashu');


// console.log(x)

console.log(color.bgBlue('Namaste'))



//local module


const register =require('./auth')

register('Ashutosh')

