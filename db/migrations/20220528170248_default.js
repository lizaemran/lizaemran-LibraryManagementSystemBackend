 exports.up = function(knex) {
    return knex.schema
    .createTable('users', require('./schemas/Users')) // User Schema
    .createTable('books', require('./schemas/Books')) // Books Schema
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('books')
};
