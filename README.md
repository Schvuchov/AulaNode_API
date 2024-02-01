# AulaNode_API

  - Começando:
    1 - Criar uma pasta e iniciar o projeto digitando no terminal: npm init –y
    2 - Instalar as dependencias: npm install express pg dotenv
    3 - Criar o arquivo app.js e pastas controllers e routes
    4 - Editar package.json incluindo a linha: "type": "module",
    5 - Incluir também o script de start no package.json: "scripts": {"start": "node --watch app.js"},

  - O app/server ficará responsável por iniciar por iniciar o servidor express e se comunica com o arquivo que contem os caminhos para os recursos (rotas).
  - Em routes vamos definir as rotas que estarão disponíveis e as ações que elas
irão ativar (controllers). Utilizaremos o método Router do express e exportamos as rotas configuradas.
  - Em controllers, temos as funções que vão receber a requisição e dar a resposta ao usuário.
