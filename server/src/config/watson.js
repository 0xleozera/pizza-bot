const AssistantV1 = require('ibm-watson/assistant/v1')

const assistant = new AssistantV1({
  iam_apikey: process.env.API_KEY,
  url: process.env.URL,
  version: process.env.VERSION
})

module.exports = assistant
