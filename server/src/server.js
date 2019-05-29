const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

class Server {
  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(bodyParser.json())
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new Server().express
