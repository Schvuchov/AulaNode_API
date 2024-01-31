//import { database } from '../database.js'
import {Heroi } from '../models/Heroi.js'

const getCompras = async (req, res) => {
    const herois = await Heroi.findAll()
    //const compras = await database.query('SELECT * FROM COMPRAS') //isso cria uma promessa (demora um tempo)
    //res.status(200).send({ dados: compras.rows })
}

export { getCompras }