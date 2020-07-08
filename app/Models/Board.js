'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Board extends Model {
  board_columns () {
    return this.hasMany('App/Models/BoardColumn')
  }
}

module.exports = Board
