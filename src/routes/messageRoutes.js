const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Message management
 */

/**
 * @swagger
 * /messages:
 *   get:
 *     summary: Get all messages
 *     tags: [Messages]
 *     responses:
 *       200:
 *         description: List of messages
 */
router.get('/', (req, res) => req.controller.getAllMessages(req, res));

/**
 * @swagger
 * /messages/{id}:
 *   get:
 *     summary: Get a message by ID
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Message ID
 *     responses:
 *       200:
 *         description: A single message
 */
router.get('/:id', (req, res) => req.controller.getMessageById(req, res));

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Create a message
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               sender:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message created
 */
router.post('/', (req, res) => req.controller.createMessage(req, res));

/**
 * @swagger
 * /messages/{id}:
 *   put:
 *     summary: Update a message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Message ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *               sender:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message updated
 */
router.put('/:id', (req, res) => req.controller.updateMessage(req, res));

/**
 * @swagger
 * /messages/{id}:
 *   delete:
 *     summary: Delete a message
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Message ID
 *     responses:
 *       200:
 *         description: Message deleted
 */
router.delete('/:id', (req, res) => req.controller.deleteMessage(req, res));

module.exports = (controller) => {
  // Inject the controller into request for reuse
  router.use((req, res, next) => {
    req.controller = controller;
    next();
  });

  return router;
};
