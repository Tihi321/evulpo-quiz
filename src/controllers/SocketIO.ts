import { io } from "socket.io-client";

const servicesIp = "127.0.0.1";

const socketIO = io(`ws://${servicesIp}:4567`);
socketIO.on("connect", () => {
  console.log("connect");
});

export default socketIO;
