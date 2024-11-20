# Processos Software

## Descrição

O projeto **Processos Software** é uma aplicação desenvolvida em Node.js com TypeScript que utiliza o framework Express para criar uma API RESTful. A aplicação tem como objetivo gerenciar usuários, permitindo operações como cadastro, login e recuperação de informações de usuários. A aplicação também utiliza o Knex.js para interagir com um banco de dados PostgreSQL.

## Funcionalidades

- **Cadastro de Usuários**: Permite o cadastro de novos usuários com validação de campos obrigatórios e limites de tamanho.
- **Login de Usuários**: Permite que usuários façam login na aplicação utilizando e-mail e senha.
- **Recuperação de Informações de Usuários**: Permite a recuperação de informações de usuários cadastrados.
- **Validação de Dados**: Utiliza a biblioteca Joi para validar os dados de entrada.
- **Autenticação JWT**: Utiliza JSON Web Tokens (JWT) para autenticação e autorização de usuários.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript server-side.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Express**: Framework web para Node.js.
- **Knex.js**: Query builder SQL para Node.js.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Joi**: Biblioteca de validação de dados.
- **bcrypt**: Biblioteca para hashing de senhas.
- **jsonwebtoken**: Biblioteca para criação e verificação de JSON Web Tokens (JWT).
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Jest**: Framework de testes em JavaScript.

## Estrutura do Projeto

- **src**: Diretório principal do código fonte.
  - **controller**: Contém os controladores da aplicação.
  - **services**: Contém os serviços da aplicação.
  - **models**: Contém os modelos de dados.
  - **connection**: Contém a configuração de conexão com o banco de dados.
  - **middleware**: Contém os middlewares da aplicação.
  - **schema**: Contém os esquemas de validação de dados.
  - **routes**: Contém as definições de rotas da aplicação.
- **tests**: Diretório contendo os testes unitários e de integração.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/processos-software.git

   Navegue até o diretório do projeto:
   cd processos-software

   Instale as dependências:
npm install

//

Contribuição
Faça um fork do projeto.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Commit suas mudanças (git commit -am 'Adiciona nova feature').
Faça push para a branch (git push origin feature/nova-feature).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.


