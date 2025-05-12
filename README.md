# Node.js Web API

This project is a Node.js Web API following Clean Architecture and Clean Code principles. It uses Express for the web server, pg for PostgreSQL database interaction, and body-parser for parsing incoming request bodies.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

1. Clone the repository:
   ```sh
   git clone https://github.com/gianaugusto/node-chat.git
   cd node-chat
   ```

2. Build and run the application using Docker Compose:
   ```sh
   docker-compose up --build
   ```

3. The application will be available at `http://localhost:5500`.

## Project Structure

- `src/app.js`: Entry point of the application.
- `src/config/db.js`: Database configuration.
- `src/controllers/`: Controllers for handling requests.
- `src/migrations/`: Database migration scripts.
- `src/repositories/`: Data access layer.
- `src/routes/`: Route definitions.
- `src/services/`: Business logic layer.

## Scripts

- `start`: Starts the application.
  ```sh
  npm start
  ```
- `migrate`: Runs the database migration script.
  ```sh
  npm run migrate
  ```

## Dependencies

- `express`: Web framework.
- `pg`: PostgreSQL client.
- `body-parser`: Middleware for parsing request bodies.

## Dev Dependencies

- `nodemon`: Development tool for automatically restarting the application.

## License

This project is licensed under the ISC License.
