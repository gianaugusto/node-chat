const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');
const UserController = require('./controllers/UserController');
const MessageController = require('./controllers/MessageController');
const UserService = require('./services/UserService');
const MessageService = require('./services/MessageService');
const UserRepository = require('./repositories/UserRepository');
const MessageRepository = require('./repositories/MessageRepository');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
app.use(bodyParser.json());

const userRepository = new UserRepository(db);
const messageRepository = new MessageRepository(db);

const userService = new UserService(userRepository);
const messageService = new MessageService(messageRepository);

const userController = new UserController(userService);
const messageController = new MessageController(messageService);

app.use('/users', userRoutes(userController));
app.use('/messages', messageRoutes(messageController));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
