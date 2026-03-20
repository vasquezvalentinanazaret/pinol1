const router = require('express').Router();
const { authMiddleware } = require('../middlewares/auth');

let payments = [];

router.post('/', authMiddleware, (req,res)=>{
  const { orderId, method } = req.body;
  let status = 'pending';

  if(method === 'card'){
    status = 'paid'; // simulado
  }

  const payment = {
    id: Date.now().toString(),
    orderId,
    method,
    status,
    reference: method === 'transfer' ? 'PENDIENTE_VALIDACION' : 'OK'
  };

  payments.push(payment);
  res.json(payment);
});

module.exports = router;
