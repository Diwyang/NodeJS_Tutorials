const { createPool } = require("mysql");
/** Connection pool creation - START */
const db = createPool({
  port: 3306,
  host: "us-cdbr-east-05.cleardb.net",
  user: "b887bba937b3dc",
  password: "d2d0a3f8",
  database: "heroku_00b78077706c28e",
  connectionLimit: 10,
});
/** Connection pool creation - END */
module.exports = db;