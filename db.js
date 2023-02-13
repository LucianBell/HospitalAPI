const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Patients",
  password: "BelliniPostgres",
  port: 5432,
});

module.exports = pool;
