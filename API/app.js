// Importação de pacotes e arquivos
import express from 'express'
import {router} from './routes/herois.js'
import { sequelize } from './database.js'
import 'dotenv/config'

//sincronizar com o banco de dados
try{
    sequelize.sync()
}catch (erro) {
    console.log(erro)
}

// Inicializando o pacote express
const app = express()

// Configurando o reconhecimento de JSON
app.use(express.json())

// Utilizando o arquivo de rotas importado na linha 3
app.use(router)

// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log('Servidor iniciado'))




//app vai chamar as routas... rotas vai chamar controllers onde definimos as requisições GEt/POST 
//database faz a conexão com o bd
//Heroi define a criação da tabela, parte do SQL