'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Moment = use('moment')

class Serie extends Model {
    genero(){
        return this.belongsTo("app/Models/Genero")
    }
  
  static get dates () {
        return super.dates.concat(['lancamento'])
      }

     
  
}

module.exports = Serie
