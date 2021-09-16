const socketIO = require('socket.io');
const socket = {};

function connect(server){

    socket = socketIO(server)
}