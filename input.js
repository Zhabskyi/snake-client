let connection; 

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',handleUserInput);
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    //stdin.write("Move: up");
    connection.write("Move: up");
  } else if (key === 's') {
    //stdin.write("Move: down");
    connection.write("Move: down");
  } else if (key === 'a') {
    //stdin.write("Move: left");
    connection.write("Move: left");
  } else if (key === 'd') {
    //stdin.write("Move: right");
    connection.write("Move: right");
  } else if (key === 'q') {
    //stdin.write("Move: right");
    connection.write("Say: Here we go!");
  } else if (key === 'e') {
    //stdin.write("Move: right");
    connection.write("Say: Beep beep!");
  }
}



module.exports = { setupInput };