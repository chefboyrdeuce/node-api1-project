const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

//returns a promise that resolves to an array of all the users contained in the database
function find() {
  return db('users');
}

//expects an id as parameter and returns the users corresponding to the id provided or an empty array if no user with that id is found
function findById(id) {
  return db('users')
    .where({ id: Number(id) })
    .first();
}

//expects a user object and will add it to the database and return an object with the id of the inserted user
function insert(user) {
  return db('users')
    .insert(user)
    .then(ids => ({ id: ids[0] }));
}

//accepts the id of the user and a user object with the changes to apply.  Returns the count of updated records.  If the count is 1 it means the record was updated correctly.
function update(id, user) {
  return db('users')
    .where('id', Number(id))
    .update(user);
}

//accepts id as a parameter and upon successfuly deleting the user from the database it returns the number of records deleted
function remove(id) {
  return db('users')
    .where('id', Number(id))
    .del();
}
