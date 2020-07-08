'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TestCase extends Model {
  static get table () {
    return 'test_cases'
  }

  actions () {
    return this.hasMany('App/Models/Action')
  }

  priorities () {
    return this.hasMany('App/Models/Priority')
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  status () {
    return this.belongsTo('App/Models/Status')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = TestCase
