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


const handleUserInput = function (key) {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }

  if (key === 'w') {
    connection.write("Move: up")
  }

  if (key === 'a') {
    connection.write("Move: left")
  }

  if (key === 's') {
    connection.write("Move: down")
  }

  if (key === 'd') {
    connection.write("Move: right")
  }

  // canned responses
  if (key === 'l') {
    connection.write("Say: Good game!")
  }

  if (key === 'o') {
    connection.write("Say: Ooops!")
  }
  
};

module.exports = { setupInput };