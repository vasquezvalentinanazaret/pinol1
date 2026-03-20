const router = require('express').Router();

let restaurants = [
  { id: '1', name: 'Pollo Tip Top', category: 'Fast Food' },
  { id: '2', name: 'La Fritanga', category: 'Nica' }
];

router.get('/', (req,res)=> res.json(restaurants));

module.exports = router;
