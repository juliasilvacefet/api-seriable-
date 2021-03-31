'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Serie = use("App/Models/Serie")
/**
 * Resourceful controller for interacting with series
 */
class SerieController {
  /**
   * Show a list of all series.
   * GET series
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
    const series = Serie.all()
    return series
  }

  /**
   * Create/save a new serie.
   * POST series
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request }) {
    try{
    const data = request.only(["nome","plataforma","descricao","temporadas","elenco","lancamento","genero_id"])
    const serie = await Serie.create(data)
    return serie
      } catch (error) {
      response.status(500).send("Erro ao inserir a serie!");
    }
  }

  /**
   * Display a single serie.
   * GET series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params}) {
    const serie = await Serie.findOrFail(params.id)
    return serie
  }


  /**
   * Update serie details.
   * PUT or PATCH series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {
    try{
    const serie = await Serie.findOrFail(params.id)
    const {nome,plataforma,descricao,temporadas,elenco,lancamento,genero_id} = request.only([
      "nome","plataforma","descricao","temporadas","elenco","lancamento","genero_id"
    ])

    serie.nome = nome
    serie.plataforma = plataforma
    serie.descricao = descricao
    serie.temporadas = temporadas
    serie.elenco = elenco
    serie.lancamento = lancamento
    serie.genero_id = genero_id
    await serie.save()

    return serie
      } catch (error) {
      response.status(500).send("Erro ao atualizar a serie!");
    }
  }

  async generos({ params, request, response, view }) {
 
    const serie = await Serie.query().where("genero_id", params.id).fetch();
    return serie;
  }
  /**
   * Delete a serie with id.
   * DELETE series/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({params}) {
    try{
    const serie = await Serie.findOrFail(params.id)
    await serie.delete()
    return serie;
      } catch (error) {
      response.status(500).send("Erro ao apagar a serie!");
    }
  }
}

module.exports = SerieController
