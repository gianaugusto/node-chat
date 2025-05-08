class MessageService {
  constructor(messageRepository) {
    this.messageRepository = messageRepository;
  }

  async getAllMessages() {
    return await this.messageRepository.findAll();
  }

  async getMessageById(id) {
    return await this.messageRepository.findById(id);
  }

  async createMessage(messageData) {
    return await this.messageRepository.create(messageData);
  }

  async updateMessage(id, messageData) {
    return await this.messageRepository.update(id, messageData);
  }

  async deleteMessage(id) {
    return await this.messageRepository.delete(id);
  }
}

module.exports = MessageService;
