'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Genero = use("App/Models/Genero")

/**
 * Resourceful controller for interacting with generos
 */
class GeneroController {
  /**
   * Show a list of all generos.
   * GET generos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const generos = await Genero.all()
    return generos
  }

  

  /**
   * Create/save a new genero.
   * POST generos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request}) {
    try{
    const data = request.only(["nome"])
    const genero = await Genero.create(data)
    return genero
    } catch (error) {
      response.status(500).send("Erro ao inserir o genero!");
    }
  }

  /**
   * Display a single genero.
   * GET generos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params }) {
    const genero = await Genero.findOrFail(params.id)
    return genero;
  }



  /**
   * Update genero details.
   * PUT or PATCH generos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try{
    const genero = await Genero.findOrFail(params.id)
    const {nome} = request.only(["nome"])

    genero.nome = nome
    await genero.save()

    return genero
      } catch (error) {
      response.status(500).send("Erro ao atualizar o genero!");
    }
  }

  /**
   * Delete a genero with id.
   * DELETE generos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params}) {
    try{
    const genero = await Genero.findOrFail(params.id)
    await genero.delete()
    return genero;
      } catch (error) {
      response.status(500).send("Erro ao apagar o genero!");
    }
  }
}

module.exports = GeneroController
