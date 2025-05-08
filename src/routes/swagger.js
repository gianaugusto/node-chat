// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const PORT = process.env.PORT || 5500;

const options = {
  definition: {
    openapi: '3.0.0', // or '2.0'
    info: {
      title: 'Chat, User and Message API',
      version: '1.0.0',
      description: '  API documentation for Chat, User and Message API using Swagger',
      contact: {
        name: 'Giancarlos Macedo',
        url: 'https://gianaugusto.github.io/',
        email: 'gianaugusto@gmail.com'
      },
    },
    servers: [
      {
        url: 'http://localhost:5500', 
      },
    ],
  },
  apis: ['./userRoutes.js','./messageRoutes.js'], // Path to your route files with Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
