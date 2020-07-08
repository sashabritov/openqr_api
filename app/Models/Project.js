'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  test_cases () {
    return this.hasMany('App/Models/TestCase')
  }

  bug_reports () {
    return this.hasMany('App/Models/BugReport')
  }

  project_members () {
    return this.hasMany('App/Models/ProjectMember')
  }

  invite_mails () {
    return this.hasMany('App/Models/InviteMail')
  }

  project_news () {
    return this.hasMany('App/Models/ProjectNew')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Project
