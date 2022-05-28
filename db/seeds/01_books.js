exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          id: 1,
          name: "book1",
          author: "author1",
          dateOfReturn: "2020-05-30",
          dateOfBorrow: '2020-05-28',
          user_id: 1,
          
        }
      ]);
    });
};