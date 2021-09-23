const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133', // IP address 
    port: 50542// PORT number here,    
  });
  const name = 'AL';
  client.write(`${name} has connected!!!`);

  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  client.on('data', () => {
    console.log("Connection established");
   
})

  return conn;
};

module.exports = connect;