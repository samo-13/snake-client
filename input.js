const { moveUpKey, moveRightKey, moveLeftKey, moveDownKey } = require("./constants");

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  // movement key mapping
  if (key === moveUpKey) {
    connection.write("Move: up");
  }

  if (key === moveLeftKey) {
    connection.write("Move: left");
  }

  if (key === moveDownKey) {
    connection.write("Move: down");
  }

  if (key === moveRightKey) {
    connection.write("Move: right");
  }

  // canned responses
  if (key === 'l') {
    connection.write("Say: Good game!");
  }

  if (key === 'o') {
    connection.write("Say: Ooops!");
  }
  
};

module.exports = { setupInput };