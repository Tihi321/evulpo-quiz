const { Server } = require("socket.io");
const fetch = require("node-fetch");
const path = require('path');

const express = require('express');
const adminExpress = express();
const router = express.Router();

const { SOCKET_IO_PORT, FETCH_URL, EXPRESS_ADMIN_PORT } = require("./constants/api.js");

let values = [];

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

// google data
fetch(FETCH_URL).then(response => response.json()).then(response => {
  values = response.values;
});


// express admin
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, 'admin/index.html'));
});

router.get('/index.js', function(req, res){
  res.sendFile(path.join(__dirname, 'admin/index.js'));
});

router.get('/socket.io.js', function(req, res){
  res.sendFile(path.join(__dirname, 'libs/socket.io.min.js'));
});

adminExpress.use('/', router);

socketsIO.listen(SOCKET_IO_PORT);
console.log("Socket Server listening on port", SOCKET_IO_PORT);

adminExpress.listen(EXPRESS_ADMIN_PORT, () => {
  console.log("Admin Server listening on port", EXPRESS_ADMIN_PORT);
});