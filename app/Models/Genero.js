'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Genero extends Model {
    series(){
        return this.hasMany("App/Models/Serie")
    }
}

module.exports = Genero
