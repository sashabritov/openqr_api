'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProjectNew extends Model {
  static get table () {
    return 'project_news'
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = ProjectNew
