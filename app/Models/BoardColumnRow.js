'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BoardColumnRow extends Model {
  static get table () {
    return 'board_column_rows'
  }

  board_column () {
    return this.belongsTo('App/Models/BoardColumn')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = BoardColumnRow
