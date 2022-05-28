const express = require('express');
const router = express.Router();

const booksController = require('../../controllers/books');

router.get('/', booksController.getBooks); // Gets Books
router.put('/:id', booksController.updateBook); // Updates book

module.exports = router;