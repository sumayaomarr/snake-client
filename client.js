
const { IP, PORT } = require("./constants");
const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Now connected to the game server.');
    conn.write("Name: SSS");
   
  });
  conn.on("data", (data) => {
    // code that does something when reicived data
    console.log(data, 'data recieved')
  });
  conn.on("data", (data) => {

  });
  // const handleUserInput = function (key) {
  // if (key === '\u0003') {
  //   process.exit();
  // } if (key === 'w') {
  //   connection.write("Move: up") 
  // } if (key === 'a') {
  //   connection.write("Move: left") 
  // } if (key === 's') {
  //   connection.write("Move: down") 
  // } if (key === 'd') {
  //   connection.write("Move: right") 
  // } if (key === "f") {
  //   connection.write("Say: this is so fun")
  // }}
 
  return conn;
};

module.exports = {connect};
