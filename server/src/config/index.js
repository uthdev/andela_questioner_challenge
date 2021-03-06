import dotenv from 'dotenv';

const { Pool } = require('pg');

dotenv.config();
const dbConfig = {};
dbConfig.test = {
  connectionString: process.env.TEST_DATABASE_URL,
};

dbConfig.database = {
  connectionString: process.env.DATABASE_URL,
};

const pool = (process.env.NODE_ENV === 'production') ? new Pool(dbConfig.test) : new Pool(dbConfig.test);

export default {
  query: (text, params, callback) => {
    const start = 'Database queried';
    console.log(start);
    return pool.query(text, params, callback);
  },
};
