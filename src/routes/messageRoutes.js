const express = require('express');
const router = express.Router();

module.exports = (messageController) => {
  router.get('/', (req, res) => messageController.getAllMessages(req, res));
  router.get('/:id', (req, res) => messageController.getMessageById(req, res));
  router.post('/', (req, res) => messageController.createMessage(req, res));
  router.put('/:id', (req, res) => messageController.updateMessage(req, res));
  router.delete('/:id', (req, res) => messageController.deleteMessage(req, res));

  return router;
};
