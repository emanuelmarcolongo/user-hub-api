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
$ git clone https://github.com/emanuelmarcolongo/user-hub-api
$ cd user-hub-api
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

## Documentação

## Endpoints

<details>
  <summary>GET /users</summary>
  
 - **Endpoint:** `GET /users`
- **Descrição:** Resgata a lista de todos os usuários cadastrados.
- **Resposta:** Retorna um array de objetos usuário

  ```bash
  status: 200 
  [
  {
    "id": 1,
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
    "isDeleted": false
  },
  ...]
  ```
  
</details>
  



<details>
  <summary>POST /users</summary>
  
 - **Endpoint:** `Post /users`
- **Descrição:** Registra um novo usuário no banco de dados.
- **Corpo:**
  ```bash
  {
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
  }
  ```
- **Resposta:**

  status 201 - Retorna o usuário criado
  ```bash
  {
    "id": 1,
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
    "isDeleted": false
  }
  ```
  status 400 - (invalid e-mail):
 ```bash
  {
  "message": [
    "email must be an email"
  ],
  "error": "Bad Request",
  "statusCode": 400
  }
  ```
 status 409 - (email em uso):
 ```bash
  {
  "message": "Email já cadastrado",
  "error": "Conflict",
  "statusCode": 409
  }
  ```
  
</details>

<details>
  <summary>PUT /users/:id</summary>
  
- **Endpoint:** `PUT /users/:id`
- **Descrição:** Edita um usuário com determinado ID.
-  **Corpo:**
  ```bash
  {
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
  }
  ```
- **Resposta:**

- 

  status 200:
  ```bash
  {
    "id": 1,
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
    "isDeleted": false
  }
  ```

   status 409 (email pertence a outro usuário):
 ```bash
  {
  "message": "Email pertence a outro usuário!",
  "error": "Conflict",
  "statusCode": 409
}
  ```
  status 404 (id de usuário não encontrado):
 ```bash
  {
  "message": "Usuário não encontrado",
  "error": "Not Found",
  "statusCode": 404
}
  ```
  
</details>

<details>
  <summary>PUT /users/delete/:id</summary>
  
- **Endpoint:** `PUT /users/:id`
- **Descrição:** Edita o status isDeleted para true do usuário com o ID especificado.
- **Resposta:**

  status 200:
  ```bash
  {
    "id": 1,
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
    "isDeleted": true
  }
  ```
  
  status 404 (id de usuário não encontrado):
 ```bash
  {
  "message": "Usuário não encontrado",
  "error": "Not Found",
  "statusCode": 404
}
  ```

  
</details>

<details>
  <summary>DELETE /users/:id</summary>
  
- **Endpoint:** `DELETE/users/:id`
- **Descrição:** Deleta o usuário com o ID especificado.
- **Resposta:**

  status 200:
  ```bash
  {
    "id": 1,
    "email": "example@email.com",
    "name": "Example",
    "password": "strongPassword123!@#",
    "imgUrl": "https://urlimage.jpg",
    "isDeleted": false
  }
  ```
  
  status 404 (id de usuário não encontrado):
 ```bash
  {
  "message": "Usuário não encontrado",
  "error": "Not Found",
  "statusCode": 404
}
  ```

  
</details>








## Licença

Nest is [MIT licensed](LICENSE).
