import pg from "pg";
const { Pool } = pg;
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default function query(text, params) {
  return pool.query(text, params);
}

// import pg from "pg";
// import * as dotenv from "dotenv";
// dotenv.config();

// export const DATABASE_URL = process.env.URL;
// console.log(DATABASE_URL);

// export const pool = new pg.Pool({
//   connectionString: DATABASE_URL,
// });
