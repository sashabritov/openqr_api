'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BoardSchema extends Schema {
  up () {
    this.create('boards', (table) => {
      table.increments().unsigned();
      table.string('title', 50);
      table.integer('project_id').unsigned();
      table.timestamps();
      table.integer('deleted_at');
    })
  }

  down () {
    this.drop('boards');
  }
}

module.exports = BoardSchema
