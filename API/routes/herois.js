import express from 'express'
import { getHerois, criarHeroi, atualizarHeroi, apagarHeroi, getHeroisPeloId } from '../controllers/herois.js'

const router = express.Router()

router.get('/herois', getHerois) // getCompras vem do controller compras. Podemos criar essa função e depois importar pra ca

router.get('/herois/:id',getHeroisPeloId)

router.post('/herois', criarHeroi) // postCompras vem do controller compras

router.put('/herois/:id', atualizarHeroi)

router.delete('/herois/:id', apagarHeroi)

export { router } // Precisa de {} no momento de importar
