import { database } from '../database.js'

const getCompras = async (req, res) => {
    const compras = await database.query('SELECT * FROM COMPRAS') //isso cria uma promessa (demora um tempo)
    res.status(200).send({ dados: compras.rows })
}

export { getCompras }