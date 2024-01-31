import express from 'express'
import { getCompras } from '../controllers/compras.js'

const router = express.Router()

router.get('/compras', getCompras) // getCompras vem do controller compras. Podemos criar essa função e depois importar pra ca

//router.post('/compras', criarCompras) // postCompras vem do controller compras

//router.put('/compras', atualizarCompras)

//router.put('/compras', apagarCompras)

export { router } // Precisa de {} no momento de importar
