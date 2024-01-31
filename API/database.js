//trazendo um banco de dados atraves da url do elephantsql

//import pg from 'pg'
//import dotenv from 'dotenv'
//dotenv.config()  //para trazer a url q esta em dotenv, esta la para proteger a senha

//const database = new pg.Client(process.env.BANCO_DE_DADOS)

//database.connect((erro) => {
//    if(erro){
///        console.log('Erro ao conectar')
 //   } else {
 //       console.log('Banco conectado com sucesso')
 //   }
//})

//export { database }

import {Sequelize} from 'sequelize'

//const sequelize = new Sequelize(process.env.BANCO_DE_DADOS)
const sequelize = new Sequelize('keuqldsi', 'keuqldsi', 'd_yOVo2nh2xoMAyvbZogXMKu1Rg39XWx', {
    host: 'silly.db.elephantsql.com',
    dialect: 'postgres'
})

try {
    await sequelize.authenticate() 
    console.log('Conexao bem sucedida')
} catch (erro){
    console.log(erro)
}

export {sequelize}