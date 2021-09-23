const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address here, '135.23.223.133'
    port: 50542// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

// conn.on("connect", (data) => {
//   console.log("DATA CAME IN!!!!!");
//   console.log(data);
// });

console.log("Connecting ...");
connect();