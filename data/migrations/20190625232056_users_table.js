
// changes to be applied to the database
exports.up = function (knex, Promise) {
    return knex.schema.createTable('roles', function (tbl) {
        // primary key called id, integer, auto-increment
        tbl.increments(); // generates primary key automatically

        // show the knex docs to see the different data types included
        tbl
            .string('name', 128) // will generate a varchar(128) by default. SQLite ignores the sizing but other DBMS will respect it.
            .notNullable() // make it required or NOT NULL
            .unique(); // add a unique constraint and index automatically

        tbl.timestamps(true, true); // adds created_at and updated_at columns that default to current date and time
    });
};

// undo the changes
exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('roles');
};