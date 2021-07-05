// config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  express_port: process.env.EXPRESS_PORT,
  connection_string: process.env.CONNECTION_STRING,
  database_password: process.env.DATABASE_PW,
  node_env: process.env.NODE_ENV
};

