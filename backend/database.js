require('dotenv').config(); // Load environment variables

const { Sequelize } = require('sequelize');

// Initialize the database connection
const sequelize = new Sequelize(
  process.env.DB_NAME,       // Database name
  process.env.DB_USER,       // Username
  process.env.DB_PASSWORD,   // Password
  {
    host: process.env.DB_HOST, // Host (default is localhost)
    port: process.env.DB_PORT, // Port (default is 5432)
    dialect: 'postgres',       // Database type
  }
);

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;