const express = require('express');
const routes = express.Router()
const players = require('./controllers/players')

routes.get('/players', players.lista)

routes.post('/players', players.adiciona)

routes.delete('/players/:id', players.delete)

//Entidades: Dia[jogadores], jogadores[nome, pontuação]
//Funcionalidades: Listar os jogos. Criar um novo dia. Jogadores comuns, adicionar novo jogador, remover jogador, modificar pontuação, enviar no fim a pontuação dos jogadores por wpp. 


module.exports = routes