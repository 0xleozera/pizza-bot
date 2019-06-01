require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')

class Server {
  constructor () {
    this.express = express()
    this.cors()
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(bodyParser.json())
  }

  routes () {
    this.express.use(routes)
  }

  cors () {
    this.express.use(cors())
  }
}

module.exports = new Server().express
