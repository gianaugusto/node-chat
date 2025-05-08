class MessageRepository {
  constructor(db) {
    this.db = db;
  }

  async findAll() {
    const result = await this.db.query('SELECT * FROM messages');
    return result.rows;
  }

  async findById(id) {
    const result = await this.db.query('SELECT * FROM messages WHERE id = $1', [id]);
    return result.rows[0];
  }

  async create(messageData) {
    const { user_id, content, current_status } = messageData;
    const result = await this.db.query(
      'INSERT INTO messages (user_id, content, current_status) VALUES ($1, $2, $3) RETURNING *',
      [user_id, content, current_status]
    );
    return result.rows[0];
  }

  async update(id, messageData) {
    const { user_id, content, current_status } = messageData;
    const result = await this.db.query(
      'UPDATE messages SET user_id = $1, content = $2, current_status = $3 WHERE id = $4 RETURNING *',
      [user_id, content, current_status, id]
    );
    return result.rows[0];
  }

  async delete(id) {
    await this.db.query('DELETE FROM messages WHERE id = $1', [id]);
  }
}

module.exports = MessageRepository;
