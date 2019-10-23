const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.15.225',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write('Successfully connected to game server');
    conn.write('Name: OLE');
    conn.write('Move: down');
    setTimeout(() => conn.write('Move: left'), 500)
    setTimeout(() => conn.write('Move: left'), 1000)
    setInterval(() => conn.write('Move: right'), 250)
    setInterval(() => conn.write('Move: down'), 500)
  });



  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  

  return conn;
}

console.log('Connecting ...');

module.exports = { connect };