const mysql = require("mysql2");

let pool;

const init = async () => {
  pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306,
    connectionLimit: 10,
  });
  console.log("Connected to DB!");
  // console.log(pool);
  return true;
};

const getPool = () => {
  return pool;
};

module.exports.init = init;
module.exports.getPool = getPool;
