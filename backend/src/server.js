const http = require('http');
const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const { authMiddleware } = require('./middlewares/auth');

const authRoutes = require('./routes/auth');
const restaurantRoutes = require('./routes/restaurants');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req,res)=>res.json({ok:true}));

app.use('/api/auth', authRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// simple in-memory rooms for order tracking
io.on('connection', (socket) => {
  socket.on('join_order', (orderId) => {
    socket.join(`order_${orderId}`);
  });

  socket.on('driver_location', ({ orderId, lat, lng }) => {
    io.to(`order_${orderId}`).emit('location_update', { lat, lng });
  });
});

app.set('io', io);

const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=>console.log('API running on', PORT));
