const mysql = require("mysql");

const options = {
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.DB_PASSWORD,
  database: process.DB_NAME,
  connectionLimit: 10,
};

let pool;

const init = async () => {
  pool = mysql.createPool(options);
  console.log("Connected to DB!");
  return true;
};

const getPool = () => {
  return pool;
};

module.exports.init = init;
module.exports.getPool = getPool;
