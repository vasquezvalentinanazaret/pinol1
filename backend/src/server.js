const express = require('express');
const cors = require('cors');

const ordersRoutes = require('./orders/orders.routes');
const paymentsRoutes = require('./payments/payments.routes');

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 AQUÍ ESTÁ LA CLAVE
app.use('/api/orders', ordersRoutes);
app.use('/api/payments', paymentsRoutes);
app.get('/', (req, res) => {
  res.send('PinolApp API funcionando 🚀');
});
app.listen(4000, () => {
  console.log('Servidor corriendo en puerto 4000');
});
