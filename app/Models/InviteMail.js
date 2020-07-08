'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class InviteMail extends Model {
  static get table () {
    return 'invite_mails'
  }

  project () {
    return this.belongsTo('App/Models/Project')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = InviteMail
