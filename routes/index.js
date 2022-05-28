const express = require('express');
const router = express.Router();

router.use('/users',require('./users'));
router.use('/books', require('./books'));

router.get('/', (req, res) => {
  res.send('Welcome to new API');
});

module.exports = router;