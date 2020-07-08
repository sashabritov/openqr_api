'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BugReport extends Model {
  static get table () {
    return 'bug_reports'
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = BugReport
