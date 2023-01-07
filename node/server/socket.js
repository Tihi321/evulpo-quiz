const { Server } = require("socket.io");

const { SOCKET_IO_PORT } = require("../constants/api.js");

// sockets
const socketsIO = new Server({
  cors: { origin: "http://localhost" },
  maxHttpBufferSize: 1e11,
  pingTimeout: 10000000,
});

socketsIO.on("connection", client => {
  client.on("disconnect", () => {
    client.disconnect(true);
  });

  client.on("adminConnection", () => {
    console.log("admin connected");
  });

  client.on("clientConnection", () => {
    console.log("client connected");
  });
});

socketsIO.listen(SOCKET_IO_PORT);
console.log("Socket Server listening on port", SOCKET_IO_PORT);

module.exports = {};