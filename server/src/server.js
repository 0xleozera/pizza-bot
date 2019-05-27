const express = require('express')
const routes = require('./routes')

class Server {
  constructor () {
    this.express = express()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new Server().express
