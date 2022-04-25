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

  conn.write('Move: up')

  setTimeout (() => {
    conn.write('Move: up');
  }, 50);
  setTimeout (() => {
    conn.write('Move: up');
  }, 150);
  setTimeout (() => {
    conn.write('Move: up');
  }, 200);

  conn.on('data', () => {
    console.log('you ded cuz you idled')
   });


  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };

// supported move commands

// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)