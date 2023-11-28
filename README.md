<h1 align="center"> Users Hub API - NestJs API</h1>

<p align="center">
    <img alt="NestJs" src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" />
  <img alt="NodeJs" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />

  <img alt="Prisma" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Postgresql" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
</p>

## Descricao:

Este é um projeto de aplicação CRUD de usuários desenvolvido utilizando o framework NestJS, o ORM Prisma e o banco de dados PostgreSQL. Esta aplicação permite a criação, leitura, atualização e exclusão de registros de usuários.
O front-end foi realizado em react native e você encontra [AQUI](https://github.com/emanuelmarcolongo/user-hub)

## Pré-requisitos
Certifique-se de ter as seguintes ferramentas instaladas em sua máquina antes de começar:

- Node.js
- NestJS CLI
- PostgreSQL

## Rodando o Projeto

### Clone o Repositório

```bash
$ git clone https://github.com/emanuelmarcolongo/users-hub-api
$ cd users-hub-api
```
### Instalação

```bash
$ npm install
```

### Configure a variável de ambiente:

Crie um arquivo .env na raiz do projeto:

```bash
DATABASE_URL="postgresql://{postgresUser}:{postgresPassword}@localhost:5432/{databaseName}?schema=public"
postgresUser = "Usuário postgreslq"
postgresPassword = "Senha  postgresql"
databaseName = "Nome do seu banco de dados"

```


### Rode as migrações do prisma
```bash
$ npx prisma migrate dev
```

## Rodando o APP:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Conecte com o front para ver o resultado!


## Licença

Nest is [MIT licensed](LICENSE).
