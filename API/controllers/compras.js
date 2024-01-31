//import { database } from '../database.js'
import {Heroi } from '../models/Heroi.js'

const getCompras = async (req, res) => {
    const novoHeroi = {
        nome: 'Batman', pontosDePoder: 500
    }  //deveria ser em um POST mas só pra exemplificar
    const heroi = await Heroi.create(novoHeroi)
    //const herois = await Heroi.findAll()
    //const compras = await database.query('SELECT * FROM COMPRAS') //isso cria uma promessa (demora um tempo)
    //res.status(200).send({ dados: compras.rows })
    res.status(200).send({ dados: heroi })
}

export { getCompras }