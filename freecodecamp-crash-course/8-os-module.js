// // modules


// // const {john, peter} = require("./4-names");
// // const sayHi= require('./5-utils')
// // const data= require('./6-alternative-flavor')
// // console.log(data)
// require('./7-mind-grenade')
// // console.log(names)

// // sayHi("susan");
// // sayHi(peter);
// // sayHi(john);




const os =require('os')
console.log(os)
//info about curr use


const user= os.userInfo();
console.log(user)


// uptime of computer 

console.log(`the system up time is ${os.uptime()/60} mins`)


const currentOS= {
    name:os.type(),
    release: os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}

console.log(currentOS)

