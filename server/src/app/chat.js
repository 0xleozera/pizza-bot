const Assistant = require('../config/watson')

class Chat {
  conversation (req, res) {
    const { text, context = {} } = req.body

    const params = {
      input: { text },
      workspace_id: process.env.WORKSPACE_ID,
      context
    }

    Assistant.message(params, (err, response) => {
      if (err) {
        res.status(500).json(err)
      } else {
        res.json(response)
      }
    })
  }
}

module.exports = new Chat()
