const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
}

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function findSteps(id) {
  return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('steps.id', 'scheme_name', 'step_number', 'instructions')
    .where({ scheme_id: id})
    .orderBy('step_number')
}

function add(schema) {
  return db('schemes')
    .insert(schema)
    .then(([id]) => findById(id));
}

function update(changes, id) {
  return db('schemes')
    .where({ id })
    .update(changes)
    .then(count => findById(id));
}

function remove(id) {
  return db('schemes')
    .where({ id })
    .del();
}

function addStep(step, scheme_id) {
  
}