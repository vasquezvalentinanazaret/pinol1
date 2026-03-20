const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

let users = [
  { id: 'u1', email: 'user@test.com', password: '123456', role: 'USER' },
  { id: 'd1', email: 'driver@test.com', password: '123456', role: 'DRIVER' },
  { id: 'a1', email: 'admin@test.com', password: '123456', role: 'ADMIN' }
];

router.post('/login', (req,res)=>{
  const { email, password } = req.body;
  const user = users.find(u=>u.email===email && u.password===password);
  if(!user) return res.status(401).json({error:'Invalid'});
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'supersecret');
  res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

module.exports = router;
