const knex = require('../../db/knex');

// Gets all addresses
const getBooks = async (req, res) => {
  try {
      await knex.from('books').select('id','name', 'author', 'dateOfReturn', 'dateOfBorrow','user_id').then((books) => {
        res.send(books)
      })
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

// Updates address by ID
const updateBook = async (req, res) => {
  try {
    const {
        name, author, dateOfReturn, dateOfBorrow,user_id
    } = req.body;
    
    const book = {};
    
    if (name) book.name = name;
    if (author) book.author = author;
    if (dateOfReturn) book.dateOfReturn = dateOfReturn;
    if (dateOfBorrow) book.dateOfBorrow = dateOfBorrow;
    if (user_id) book.user_id = user_id;

    await knex('books').where('id', req.params.id)
      .update(book).then(() => {
        knex.select()
          .from('books').where('id', req.params.id).then((book) => {
            res.send(book[0])
          })
      })

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}



module.exports = {
  getBooks,
  updateBook,
  
}