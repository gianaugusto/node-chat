class UserRepository {
  constructor(db) {
    this.db = db;
  }

  async findAll() {
    const result = await this.db.query('SELECT * FROM users');
    return result.rows;
  }

  async findById(id) {
    const result = await this.db.query('SELECT * FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  async create(userData) {
    const { google_id, display_name, current_status } = userData;
    const result = await this.db.query(
      'INSERT INTO users (google_id, display_name, current_status) VALUES ($1, $2, $3) RETURNING *',
      [google_id, display_name, current_status]
    );
    return result.rows[0];
  }

  async update(id, userData) {
    const { google_id, display_name, current_status } = userData;
    const result = await this.db.query(
      'UPDATE users SET google_id = $1, display_name = $2, current_status = $3 WHERE id = $4 RETURNING *',
      [google_id, display_name, current_status, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await this.db.query('DELETE FROM users WHERE id = $1', [id]);
  }
}

module.exports = UserRepository;
