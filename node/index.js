require("./server/api");
const SocketController = require("./server/controllers/SocketController");
const SocketListeners = require("./server/controllers/SocketListeners");

SocketController.connect();
SocketController.onClientConnection([
  SocketListeners.game
]);

require("./server/admin");