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

const getHerois = async (req, res) => {
    try {
        const herois = await Heroi.findAll()
        //findByPk(numero)       outros find
        //findOne({where: {nome: 'Batman'}})
        res.status(200).send({ message: 'Herois enconctrados', data: herois })
    } catch (err) {
        res.status(500).send({ message: 'Houve um erro na busca' })
    }

}

const atualizarHeroi = async (req, res) => {
    try {
        const id = req.params.id
        const { nome, pontosDePoder } = req.body

        if (!nome || !pontosDePoder || !id) {
            res.status(400).send({ message: 'Dados incompletos' })
        }
        const heroiAtualizado = { nome, pontosDePoder }
        const resultado = await Heroi.update(heroiAtualizado, { where: { id: id } })
        res.status(200).send({ message: 'Heroi atualizado', resultado: resultado })
    } catch (err) {
        res.status(500).send({ message: 'Erro na atualizacao' })
    }
}

const apagarHeroi = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(404).send({ message: 'Id nao informado' })
        }
        await Heroi.destroy({ where: { id: id } })
        res.status(200).send({ message: 'Heroi excluido' })
    } catch (err) {
        res.status(500).send({ message: 'Erro ao excluir heroi' })
    }
}

const getHeroisPeloId = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) {
            return res.status(400).send({ message: 'Id nao informado' })
        }
        //const heroi = await Heroi.findByPk(id)
        const heroi = await Heroi.findOne({ where: { id } })
        if(heroi){
            res.status(200).send({ message: 'Heroi encontrado', heroi })
        } else {
            res.status(204).send({message:'Heroi nao encontrado'})
        }
        
    } catch (err) {
        res.status(500).send({ message: 'Erro ao buscar heroi' })
    }
}

export { getHerois, criarHeroi, atualizarHeroi, apagarHeroi, getHeroisPeloId }