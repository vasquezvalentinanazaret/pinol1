const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { authMiddleware } = require('../middlewares/auth');

let orders = [];

router.post('/', authMiddleware, (req,res)=>{
  const { items, total, paymentMethod } = req.body;
  const order = {
    id: uuidv4(),
    userId: req.user.id,
    items,
    total,
    status: 'CREATED',
    paymentMethod,
    location: null
  };
  orders.push(order);
  res.json(order);
});

router.get('/mine', authMiddleware, (req,res)=>{
  res.json(orders.filter(o=>o.userId===req.user.id));
});

router.post('/:id/status', authMiddleware, (req,res)=>{
  const { status } = req.body;
  const order = orders.find(o=>o.id===req.params.id);
  if(!order) return res.status(404).send();
  order.status = status;

  const io = req.app.get('io');
  io.to(`order_${order.id}`).emit('status_update', order);

  res.json(order);
});

module.exports = router;
