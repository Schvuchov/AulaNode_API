//import { database } from '../database.js'
import { Heroi } from '../models/Heroi.js'

// const getHerois = async (req, res) => {
//     const novoHeroi = {
//         nome: 'Batman', pontosDePoder: 500 //deveria ser em um POST mas só pra exemplificar
//     }
//     const heroi = await Heroi.create(novoHeroi)
//     //const herois = await Heroi.findAll()
//     //const compras = await database.query('SELECT * FROM COMPRAS') //isso cria uma promessa (demora um tempo)
//     //res.status(200).send({ dados: compras.rows })
//     res.status(200).send({ dados: heroi })
// }

const criarHeroi = async (req, res) => {
    try {
        const { nome, pontosDePoder } = req.body
        if (!nome || !pontosDePoder) {
            res.status(400).send({ message: 'Dados incompletos' })
        }

        //const novoHeroi = { nome: nome, pontosDePoder: pontosDePoder }
        const novoHeroi = { nome, pontosDePoder }
        const resultado = await Heroi.create(novoHeroi)
        res.status(201).send({ message: 'Heroi criado com sucesso', data: resultado })
    } catch (err) {
        res.satus(500).send({ message: 'Houve um erro na criação' })
    }
}

const getHerois = async(req, res) => {
    try {
        const herois = await Heroi.findAll()
        //findByPk(numero)       outros find
        //findOne({where: {nome: 'Batman'}})
        res.status(200).send({ message: 'Herois enconctrados', data: herois })
    } catch (err) {
        res.status(500).send({ message: 'Houve um erro na busca' })
    }

}

export { getHerois, criarHeroi }