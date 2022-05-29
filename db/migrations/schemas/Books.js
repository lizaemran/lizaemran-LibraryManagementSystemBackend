const booksSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('name').notNullable().unique()
    table.string('author').notNullable()
    table.string('dateOfReturn').notNullable()
    table.string('dateOfBorrow').notNullable()
    table.integer("user_id").unsigned()
    table.foreign("user_id").references("users.id")
  } 
  module.exports = booksSchema;