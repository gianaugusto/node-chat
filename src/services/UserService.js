class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async getUserById(id) {
    return await this.userRepository.findById(id);
  }

  async createUser(userData) {
    return await this.userRepository.create(userData);
  }

  async updateUser(id, userData) {
    return await this.userRepository.update(id, userData);
  }

  async deleteUser(id) {
    return await this.userRepository.delete(id);
  }
}

module.exports = UserService;
