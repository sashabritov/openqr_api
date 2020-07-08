'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SecurityErrorSchema extends Schema {
  up () {
    this.create('security_errors', (table) => {
      table.increments().unsigned();
      table.string('title', 50);
      table.text('text');
      table.text('files');
      table.decimal('score');
      table.integer('user_id').unsigned();
      table.timestamps();
    })
  }

  down () {
    this.drop('security_errors');
  }
}

module.exports = SecurityErrorSchema
