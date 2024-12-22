import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';

config();

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

export default async function query<T = any>(query: string, values?: any[]) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(query, values);
    return rows as T[];
  }
  catch(error) {
    throw error;
  }
  finally {
    connection.release();
  }
}