const express = require('express');

/**
 * Export a function that receives a controller and returns a configured router
 */
module.exports = (controller) => {
  const router = express.Router();

  // Inject controller into each request
  router.use((req, res, next) => {
    req.controller = controller;
    next();
  });

  /**
   * @swagger
   * /users:
   *   get:
   *     summary: Get all users
   *     tags: [Users]
   *     responses:
   *       200:
   *         description: List of users
   */
  router.get('/', (req, res) => req.controller.getAllUsers(req, res));

  router.get('/:id', (req, res) => req.controller.getUserById(req, res));
  router.post('/', (req, res) => req.controller.createUser(req, res));
  router.put('/:id', (req, res) => req.controller.updateUser(req, res));
  router.delete('/:id', (req, res) => req.controller.deleteUser(req, res));

  return router;
};
