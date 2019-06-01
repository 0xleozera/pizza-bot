import BaseService from './base'

class ConversationService extends BaseService {
  message = async (params) => {
    const conversation = await this.post('/conversation', params)

    return {
      author: 'bot',
      context: conversation.data.context,
      message: conversation.data.output.text[0]
    }
  }
}

export default new ConversationService()
