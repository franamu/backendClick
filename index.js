// config
require("./config/config");
// requires
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

// rutas
const router = require("./router");

const app = express();
const server = http.createServer(app);

// socket
const io = socketio(server);

io.on("connection", socket => {
  console.log("we have a new connection");

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

app.use(router);

server.listen(process.env.PORT, () => {
  console.log(`Escuchando puerto ${process.env.PORT}`);
});
