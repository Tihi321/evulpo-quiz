// eslint-disable-next-line no-undef
const socket = io('http://localhost:4567', {
  origin: "http://localhost",
  transports: ["websocket"]
});
socket.on('connect', () => {
  console.log('connected to server');
});
socket.on('disconnect', () => {
  console.log('disconnected from server');
});