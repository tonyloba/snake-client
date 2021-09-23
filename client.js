const net = require('net');
const {IP, PORT} = require('./constants.js');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log("You connected to SERVER!");
    conn.write("Name: AL");
  });  
  conn.on('data', data => {
    console.log(data);
  });
  
  conn.setEncoding('utf8');
  return conn;
};

module.exports = connect;
