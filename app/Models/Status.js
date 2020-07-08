'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Status extends Model {
  static get table () {
    return 'statuses'
  }

  test_cases () {
    return this.hasMany('App/Models/TestCase')
  }
}

module.exports = Status
