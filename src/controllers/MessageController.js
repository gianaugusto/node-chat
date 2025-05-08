class MessageController {
  constructor(messageService) {
    this.messageService = messageService;
  }

  async getAllMessages(req, res) {
    const messages = await this.messageService.getAllMessages();
    res.json(messages);
  }

  async getMessageById(req, res) {
    const message = await this.messageService.getMessageById(req.params.id);
    res.json(message);
  }

  async createMessage(req, res) {
    const message = await this.messageService.createMessage(req.body);
    res.status(201).json(message);
  }

  async updateMessage(req, res) {
    const message = await this.messageService.updateMessage(req.params.id, req.body);
    res.json(message);
  }

  async deleteMessage(req, res) {
    await this.messageService.deleteMessage(req.params.id);
    res.status(204).send();
  }
}

module.exports = MessageController;
