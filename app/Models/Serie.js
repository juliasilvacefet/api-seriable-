'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Moment = use('moment')

class Serie extends Model {
    genero(){
        return this.belongsTo("app/Models/Genero")
    }
}

module.exports = Serie
