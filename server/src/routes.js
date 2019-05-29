const express = require('express')

const routes = express.Router()

const Chat = require('./app/chat')

routes.post('/conversation', Chat.conversation)

module.exports = routes
