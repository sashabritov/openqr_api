'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SecurityError extends Model {
  static get table () {
    return 'security_errors'
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = SecurityError
