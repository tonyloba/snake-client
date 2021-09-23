const connect = require("./client.js");
const setupInput = require("./input.js");

const connection = connect();

console.log('Connecting ...');

setupInput(connection);

module.exports = connect;

