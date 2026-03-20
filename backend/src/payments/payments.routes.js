const router = require('express').Router();
const { authMiddleware } = require('../middlewares/auth');

let payments = [];

router.post('/', authMiddleware, (req, res) => {
  const { orderId, method } = req.body;

  let status = 'pending';
  let reference = null;

  if (method === 'cash') {
    status = 'pending';
  }

  if (method === 'transfer') {
    status = 'pending';
    reference = 'VALIDAR_MANUAL';
  }

  if (method === 'card') {
    status = 'paid'; // simulado
    reference = 'CARD_OK';
  }

  const payment = {
    id: Date.now().toString(),
    orderId,
    method,
    status,
    reference,
    createdAt: new Date()
  };

  payments.push(payment);

  res.json(payment);
});

module.exports = router;
