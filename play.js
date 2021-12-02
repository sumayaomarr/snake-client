
const net = require("net");
const {connect} = require("./client");
const { setupInput } = require("./input");


const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  console.log(key)
  
};
console.log("Connecting ...");

const conn = connect();
setupInput(conn);