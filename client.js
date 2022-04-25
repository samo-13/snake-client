const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successful connection made!')
   });

  conn.write('Name: DOG')

  conn.on('data', () => {
    console.log('you ded cuz you idled')
   });


  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };