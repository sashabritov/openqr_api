'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProjectMember extends Model {
  static get table () {
    return 'project_members'
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = ProjectMember
