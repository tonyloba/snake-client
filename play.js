const net = require("net");
const connect = require('./client.js')




// conn.on("connect", (data) => {
//   console.log("DATA CAME IN!!!!!");
//   console.log(data);
// });

console.log("Connecting ...");
connect();