const express = require('express');

/**
 * Export a function that receives a controller and returns a configured router
 */
module.exports = (controller) => {
  const router = express.Router();

  /**
   * Inject the controller into each request before the routes are executed
   */
  router.use((req, res, next) => {
    req.controller = controller;
    next();
  });

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: User management
   */

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

  /**
   * @swagger
   * /users/{id}:
   *   get:
   *     summary: Get user by ID
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         schema:
   *           type: string
   *         required: true
   *         description: User ID
   *     responses:
   *       200:
   *         description: User data
   */
  router.get('/:id', (req, res) => req.controller.getUserById(req, res));

  /**
   * @swagger
   * /users:
   *   post:
   *     summary: Create a user
   *     tags: [Users]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               email:
   *                 type: string
   *     responses:
   *       201:
   *         description: User created
   */
  router.post('/', (req, res) => req.controller.createUser(req, res));

  /**
   * @swagger
   * /users/{id}:
   *   put:
   *     summary: Update a user
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               name:
   *                 type: string
   *               email:
   *                 type: string
   *     responses:
   *       200:
   *         description: User updated
   */
  router.put('/:id', (req, res) => req.controller.updateUser(req, res));

  /**
   * @swagger
   * /users/{id}:
   *   delete:
   *     summary: Delete a user
   *     tags: [Users]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: User deleted
   */
  router.delete('/:id', (req, res) => req.controller.deleteUser(req, res));

  return router;
};
