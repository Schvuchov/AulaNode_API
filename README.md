# AulaNode_API

 Começando:
 
   - Criar uma pasta e iniciar o projeto digitando no terminal: npm init –y
   - Instalar as dependencias: npm install express pg dotenv
   - Criar o arquivo app.js e pastas controllers e routes
   - Editar package.json incluindo a linha: "type": "module",
   - Incluir também o script de start no package.json: "scripts": {"start": "node --watch app.js"},


 Conexão entre os arquivos:
   - O app/server ficará responsável por iniciar por iniciar o servidor express e se comunica com o arquivo que contem os caminhos para os recursos (rotas).
   - Em routes vamos definir as rotas que estarão disponíveis e as ações que elas
irão ativar (controllers). Utilizaremos o método Router do express e exportamos as rotas configuradas.
   - Em controllers, temos as funções que vão receber a requisição e dar a resposta ao usuário.

  Sequelize:
  - npm i sequelize
  - criar a conexão com o banco de dados no arquivo database.js:
    
     import {Sequelize} from 'sequelize'
     const sequelize = new Sequelize(process.env.BANCO_DE_DADOS)
    
  - verificar se a conexão foi bem sucedida: authenticate
  

  Modelos:
  - Criar a pasta models contendo um arquivo para cada tabela do banco de dados,
onde serão definidas as colunas da tabela, os tipos de dados e com outras tabelas. A criação de model com sequelize é feita pelo método define().
  - Após a criação dos models, o método sync() no arquivo app.js realiza a criação das tabelas tabelas do banco de dados. 
