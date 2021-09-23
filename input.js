
let connection;


const hello = "Hello there!";

const setupInput = (conn)=> {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = (key) => {
  const stdout = process.stdout;
  
  if (key === '\u0003') {
    stdout.write("Exit game.\n");
    process.exit();
  }
  if (key === 'w') {
    console.log("Move: up");
  }
  if (key === 's') {
    console.log("Move: down");
  }
  if (key === 'a') {
    console.log("Move: left");
  }
  if (key === 'd') {
    console.log("Move: right");
  }
  if (key === "h") {
    connection.write(hello);
  }

};

module.exports = setupInput ;
