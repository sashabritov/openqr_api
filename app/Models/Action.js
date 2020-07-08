'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Action extends Model {
  test_case () {
    return this.belongsTo('App/Models/TestCase')
  }
}

module.exports = Action
