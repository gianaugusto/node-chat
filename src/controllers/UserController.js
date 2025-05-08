class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  async getAllUsers(req, res) {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req, res) {
    const user = await this.userService.getUserById(req.params.id);
    res.json(user);
  }

  async createUser(req, res) {
    const user = await this.userService.createUser(req.body);
    res.status(201).json(user);
  }

  async updateUser(req, res) {
    const user = await this.userService.updateUser(req.params.id, req.body);
    res.json(user);
  }

  async deleteUser(req, res) {
    await this.userService.deleteUser(req.params.id);
    res.status(204).send();
  }
}

module.exports = UserController;
