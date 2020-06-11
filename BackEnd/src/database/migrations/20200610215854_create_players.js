
exports.up = function(knex) {
    return knex.schema.createTable('players', function(table){
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('points').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('players')
};
