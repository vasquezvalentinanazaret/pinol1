const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("join_order", (orderId) => {
    socket.join(orderId);
  });
});

server.listen(4000, () => {
  console.log("Servidor con sockets en 4000");
});
