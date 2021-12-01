
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('connected successfully!')
  });
  
  conn.on("data", (data) => {
    // code that does something when reicived data
    console.log( data,'data recieved')
  });
  return conn;
};

console.log("Connecting ...");
connect();



