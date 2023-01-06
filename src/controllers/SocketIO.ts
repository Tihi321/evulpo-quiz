import { io } from "socket.io-client";

const socketIO = io(`ws://localhost:4567`, {
  transports: ["websocket"],
});
socketIO.on("connect", () => {
  console.log("connect");
});

export default socketIO;
