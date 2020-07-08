'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BoardColumn extends Model {
  static get table () {
    return 'board_columns'
  }

  board_column_rows () {
    return this.hasMany('App/Models/BoardColumnRow')
  }

  board () {
    return this.belongsTo('App/Models/Board')
  }
}

module.exports = BoardColumn
