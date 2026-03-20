const router = require('express').Router();
const { authMiddleware } = require('../middlewares/auth');

let orders = [];

router.post('/', authMiddleware, (req, res) => {
  const { items, total, paymentMethod } = req.body;

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No hay productos' });
  }

  const order = {
    id: Date.now().toString(),
    userId: req.user.id,
    items,
    total,
    status: 'CREATED',
    paymentMethod,
    createdAt: new Date()
  };

  orders.push(order);

  res.json(order);
});

router.get('/mine', authMiddleware, (req, res) => {
  const userOrders = orders.filter(o => o.userId === req.user.id);
  res.json(userOrders);
});

router.post('/:id/status', authMiddleware, (req, res) => {
  const { status } = req.body;

  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Orden no encontrada' });

  order.status = status;

  res.json(order);
});

module.exports = router;
