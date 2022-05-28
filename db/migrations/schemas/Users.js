const userSchema = (table) => {
    table.increments('id').primary().unique()
    table.string('name').notNullable()
    table.string('surname').notNullable()
  }
  
  module.exports = userSchema;