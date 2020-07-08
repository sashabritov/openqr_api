'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().unsigned();
      table.string('full_name', 90).notNullable();
      table.string('email', 50).notNullable().unique();
      table.string('password', 50).notNullable();
      table.string('secret_word', 50);
      table.timestamps();
      table.timestamp('deleted_at', 0).nullable();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
