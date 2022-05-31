const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: 'postgres://gkqwpuoxrfgwlj:b3370fba4ed0865811e9358f1e60b373272da10105f240f4e39712f94cb53560@ec2-18-215-96-22.compute-1.amazonaws.com:5432/dd9n3qqkskeaa9',
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect();

module.exports = pool;