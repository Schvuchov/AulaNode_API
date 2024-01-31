import express from 'express'
import { getHerois, criarHeroi } from '../controllers/herois.js'

const router = express.Router()

router.get('/herois', getHerois) // getCompras vem do controller compras. Podemos criar essa função e depois importar pra ca

router.post('/herois', criarHeroi) // postCompras vem do controller compras

//router.put('/compras', atualizarCompras)

//router.put('/compras', apagarCompras)

export { router } // Precisa de {} no momento de importar
