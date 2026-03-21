const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const ordersRoutes = require("./orders/orders.routes");
const paymentsRoutes = require("./payments/payments.routes");

const app = express();
app.use(cors());
app.use(express.json());

// rutas
app.use("/api/orders", ordersRoutes);
app.use("/api/payments", paymentsRoutes);

// test
app.get("/", (req, res) => {
  res.send("PinolApp API funcionando 🚀");
});

// 🔥 SOCKET SERVER
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("join_order", (orderId) => {
    socket.join(orderId);
  });
});

// 🔥 USAR server.listen (NO app.listen)
server.listen(4000, () => {
  console.log("Servidor con sockets en puerto 4000 🚀");
});

module.exports = { io };
