
const router = require('express').Router();
const auth = require('../../middleware/auth');

let orders=[];

// Create order
router.post('/', auth, (req,res)=>{
 const order={
   id:Date.now(),
   userId:req.user.id,
   items:req.body.items,
   total:req.body.total,
   status:'pending',
   driverId:null
 };
 orders.push(order);
 res.json(order);
});

// Get all
router.get('/', auth, (req,res)=>res.json(orders));

// Update status
router.put('/:id/status', auth, (req,res)=>{
 const order=orders.find(o=>o.id==req.params.id);
 if(!order) return res.status(404).send('Not found');
 order.status=req.body.status;
 res.json(order);
});

// Driver take order
router.put('/:id/take', auth, (req,res)=>{
 const order=orders.find(o=>o.id==req.params.id);
 if(!order) return res.status(404).send('Not found');
 order.driverId=req.user.id;
 order.status='picked_up';
 res.json(order);
});

// Deliver
router.put('/:id/deliver', auth, (req,res)=>{
 const order=orders.find(o=>o.id==req.params.id);
 if(!order) return res.status(404).send('Not found');
 order.status='delivered';
 res.json(order);
});

module.exports=router;
