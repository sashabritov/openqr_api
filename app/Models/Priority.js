'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Priority extends Model {
  static get table () {
    return 'priorities'
  }

  test_case () {
    return this.belongsTo('App/Models/TestCase')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Priority
