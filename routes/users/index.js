const express = require('express');
const router = express.Router();

const usersController = require('../../controllers/users')

router.get('/', usersController.getUsers); // Gets all users 
router.put('/:id', usersController.updateUser); // Updates users data 

module.exports = router;