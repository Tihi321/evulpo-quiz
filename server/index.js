const { Server } = require("socket.io");
const fetch = require("node-fetch");

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


const { SOCKET_IO_SERVER, SOCKET_IO_PORT, FETCH_URL, EXPRESS_ADMIN_PORT } = require("./constants/api.js");

let values = [];

// sockets
const socketsIO = new Server({
  cors: { origin: SOCKET_IO_SERVER },
  maxHttpBufferSize: 1e11,
  pingTimeout: 10000000,
});

socketsIO.on("connection", client => {
  console.log(values);
  client.on("disconnect", () => {
    client.disconnect(true);
  });
});

socketsIO.listen(SOCKET_IO_PORT);
console.log("listening on port ", SOCKET_IO_PORT);


// google data
fetch(FETCH_URL).then(response => response.json()).then(response => {
  values = response.values;
});


// express admin
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'admin/index.html'));
});

app.get('/index.js', function(req, res){
  res.sendFile(path.join(__dirname, 'admin/index.js'));
});

app.get('/values', function(req, res){
  res.send({values});
});

app.use('/', router);
app.listen(EXPRESS_ADMIN_PORT, () => {
  console.log(`Server listening at ${EXPRESS_ADMIN_PORT}`);
});