<h1 align="center">
  <br>
  Bug Tracker Simples (Simple Bug Tracker) 👻
  <br>
</h1>

![screenshot](https://github.com/Eduardo-Virissimo/simple-bugtracker/blob/main/frontend/img/animacao.gif)

## Como iniciar? (How to start?)<br>
1. Instale o Docker e inicie.
(Install Docker and launch)<br>

2. Dentro do terminal do VS Code digite:
(Inside the VS Code terminal type)<br>
`docker run --name mysql_container -e MYSQL_ROOT_PASSWORD=root mysql`

3. Crie um arquivo `.env` com o exemplo `backend/.env.example`. 
<br>(Create an `.env` file with the `backend/.env.example` example)

4. Instale os pacotes:
<br>(install the packages)<br>
<br>+ `yarn add cors`;
<br>+ `yarn add dotenv`;
<br>+ `yarn add express`;
<br>+ `yarn add mysql2`;
<br>+ `yarn add nodemon`;
<br>+ `yarn add eslint`.
 
 5. Dentro de `packege.json` adicione:
 <br>(Inside `packege.json` add)<br>
 `+ "scripts": {
    "dev": "nodemon ./src/server.js"
  },`
  
 6. Após tudo instalado com sucesso, inicie o servidor.
 <br>(After everything successfully installed, start the server)<br>
 `cd backend` --> `yarn dev`
  
 7. Com o servidor NodeJs inicializado, basta iniciar o index.html localizado em `src\frontend\index.html`.
 <br>(With the NodeJs server started, just start the index.html located in `src\frontend\index.html`)
 
 ## MySQL Table:
 
```
CREATE DATABASE IF NOT EXISTS bugtracker;

USE bugtracker;

CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  status VARCHAR(45) NOT NULL,
  created_at VARCHAR(45) NOT NULL
 );
```
