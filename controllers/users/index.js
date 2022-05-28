const knex = require('../../db/knex');

// Get's all users data 
const getUsers = async (req, res) => {
  try {
      await knex.from('users').select('id','name', 'surname').then((users) => {
        res.send(users)
      } )
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}


// Updates user data by id
const updateUser = async (req, res) => {
  try {
    
    const user = await knex.select().from('users').where('id', req.params.id).then((user) => { return user[0] })
    
    if (user.id == req.params.id) {
      const {
        name, 
        surname,
      } = req.body;
      const user = {} 
      if (name) user.name = name; // If name was included in req.body, it will overwrite name to be req.body.name value (Applies to all)
      if (surname) user.surname = surname;
      await knex('users').where('id', req.params.id)
        .update(user).then(() => { // Updates user by ID (req.user.id auth user)
          knex.select('name', 'surname', ).from('users').where('id', req.params.id).then((user) => {
            res.send(user[0])
          })
        })
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
}

module.exports = {
  getUsers,
  updateUser,
  
}