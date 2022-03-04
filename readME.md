# Aplicação Full Stack com Docker

Projeto desenvolvido para treinar a utilização de contaneirs em uma aplicação full stack com o [Docker](https://www.docker.com/).

O projeto contém um banco de dados em MySQL, um backend com [Node.js](https://nodejs.org/en/) + [Express](https://expressjs.com/) e um frontend (o mais simples possível) em [React](https://pt-br.reactjs.org/).

## Pré-Requisitos
Ter o [Docker](https://docs.docker.com/get-docker/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados na máquina.

## Rodando o projeto

Faça um clone do repositório

```
git clone https://github.com/cinmcantu/docker-full-stack.git
```

Entre na pasta
```
cd docker-full-stack
```

Rode o comando abaixo para criar as imagens e os containers
```
docker-compose up -d --build
```

A aplicação frontend estará rodando no `http://localhost:3000` e o endpoint do backend pode ser acessado pelo `http://localhost:8080/produtos`.

Para parar os containers basta rodar:
```
docker-compose stop
```

## Variáveis de Ambiente

Por motivos didáticos foi criado um arquivo `.env` com as informações do banco de dados.
Para rodar, copie o arquivo `.env.example` e renomei a cópia para `.env`. Insira as informações de Usuario e Senha do seu banco de dados (no caso da conexão com container, usar Usuario `root` e Senha `fullstack`).