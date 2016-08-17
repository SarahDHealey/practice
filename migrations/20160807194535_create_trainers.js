
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('trainers', function (table) {
    table.increments();
    table.string('name');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('trainers');
};
