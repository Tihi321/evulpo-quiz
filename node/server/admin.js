const path = require('path');
const express = require('express');
const adminServer = express();

const { EXPRESS_ADMIN_PORT } = require("../constants/api.js");

adminServer.get('/socket.io.js', function(req, res){
  res.sendFile(path.join(__dirname, '../libs/socket.io.min.js'));
});

adminServer.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '../admin/about.html'));
});

adminServer.use(express.static(path.join(__dirname, '../admin')));

adminServer.listen(EXPRESS_ADMIN_PORT, () => {
  console.log("Admin Server listening on port", EXPRESS_ADMIN_PORT);
});

module.exports = {};