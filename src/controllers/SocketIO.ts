import { io } from "socket.io-client";

const socketIO = io(`ws://localhost:4567`, {
  transports: ["websocket"],
});

export default socketIO;
